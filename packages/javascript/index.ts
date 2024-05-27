import { z } from "zod";

export const DimensionsSchema = z.object({
  kind: z.enum(["recommended", "minimum"]),
  width: z.number(),
  height: z.number(),
});
export type Dimensions = z.infer<typeof DimensionsSchema>;

export const MarginsSchema = z.object({
  kind: z.enum(["recommended"]),
  top: z
    .number()
    .min(0)
    .max(1)
    .describe("Top margin in percent of the height 0=0% 1=100%"),
  right: z
    .number()
    .min(0)
    .max(1)
    .describe("Right margin in percent of the width 0=0% 1=100%"),
  bottom: z
    .number()
    .min(0)
    .max(1)
    .describe("Bottom margin in percent of the height 0=0% 1=100%"),
  left: z
    .number()
    .min(0)
    .max(1)
    .describe("Left margin in percent of the width 0=0% 1=100%"),
});
export type Margins = z.infer<typeof MarginsSchema>;

export const FormatsSchema = z.object({
  mime_type: z.string(),
  max_size: z.number(),
});
export type Formats = z.infer<typeof FormatsSchema>;

export const SizeSchema = z.object({
  platform: z.string(),
  kind: z.string(),
  dimensions: z.array(DimensionsSchema).min(1),
  margins: z.array(MarginsSchema).min(1).optional(),
  formats: z.array(FormatsSchema).min(1),
});
export type Size = z.infer<typeof SizeSchema>;

export const DataSchema = z.object({
  sizes: z.array(SizeSchema),
});
export type Data = z.infer<typeof DataSchema>;

export function filterSizesByPlatform(sizes: Data["sizes"], platform: string) {
  return sizes.filter((size) => size.platform === platform);
}

export function getDimensionByKind(
  size: Size,
  kind: Dimensions["kind"]
): Dimensions | undefined {
  return size.dimensions.find((dimension) => dimension.kind === kind);
}

export function getMarginByKind(
  size: Size,
  kind: Margins["kind"]
): Margins | undefined {
  return size.margins?.find((margin) => margin.kind === kind);
}

export function percentMarginToPixel(
  size: Size,
  margin: Margins
): Margins | undefined {
  return {
    ...margin,
    top: Math.round(margin.top * size.dimensions[0].height),
    right: Math.round(margin.right * size.dimensions[0].width),
    bottom: Math.round(margin.bottom * size.dimensions[0].height),
    left: Math.round(margin.left * size.dimensions[0].width),
  };
}

export function sortFormatByPreference(
  size: Size,
  mimeTypePreferences: Formats["mime_type"][]
): Formats[] | undefined {
  return [...size.formats].sort((a, b) => {
    const aIndex = mimeTypePreferences.indexOf(a.mime_type);
    const bIndex = mimeTypePreferences.indexOf(b.mime_type);

    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });
}
