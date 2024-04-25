import { z } from "zod";

export const DimensionsSchema = z.object({
  kind: z.enum(["recommended", "minimum"]),
  width: z.number(),
  height: z.number(),
});
export type Dimensions = z.infer<typeof DimensionsSchema>;

export const FormatsSchema = z.object({
  mime_type: z.string(),
  max_size: z.number(),
});
export type Formats = z.infer<typeof FormatsSchema>;

export const SizeSchema = z.object({
  platform: z.string(),
  kind: z.string(),
  dimensions: z.array(DimensionsSchema).min(1),
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

export function sortFormatByPreference(
  size: Size,
  mimeTypePreferences: Formats["mime_type"][]
): Formats[] | undefined {
  return [...size.formats].sort(
    (a, b) =>
      mimeTypePreferences.indexOf(a.mime_type) -
      mimeTypePreferences.indexOf(b.mime_type)
  );
}
