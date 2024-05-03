import { z } from 'zod';

declare const DimensionsSchema: z.ZodObject<{
    kind: z.ZodEnum<["recommended", "minimum"]>;
    width: z.ZodNumber;
    height: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    kind?: "minimum" | "recommended";
    width?: number;
    height?: number;
}, {
    kind?: "minimum" | "recommended";
    width?: number;
    height?: number;
}>;
type Dimensions = z.infer<typeof DimensionsSchema>;
declare const MarginsSchema: z.ZodObject<{
    kind: z.ZodEnum<["recommended"]>;
    top: z.ZodNumber;
    right: z.ZodNumber;
    bottom: z.ZodNumber;
    left: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    kind?: "recommended";
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}, {
    kind?: "recommended";
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}>;
type Margins = z.infer<typeof MarginsSchema>;
declare const FormatsSchema: z.ZodObject<{
    mime_type: z.ZodString;
    max_size: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    mime_type?: string;
    max_size?: number;
}, {
    mime_type?: string;
    max_size?: number;
}>;
type Formats = z.infer<typeof FormatsSchema>;
declare const SizeSchema: z.ZodObject<{
    platform: z.ZodString;
    kind: z.ZodString;
    dimensions: z.ZodArray<z.ZodObject<{
        kind: z.ZodEnum<["recommended", "minimum"]>;
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind?: "minimum" | "recommended";
        width?: number;
        height?: number;
    }, {
        kind?: "minimum" | "recommended";
        width?: number;
        height?: number;
    }>, "many">;
    margins: z.ZodOptional<z.ZodArray<z.ZodObject<{
        kind: z.ZodEnum<["recommended"]>;
        top: z.ZodNumber;
        right: z.ZodNumber;
        bottom: z.ZodNumber;
        left: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind?: "recommended";
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }, {
        kind?: "recommended";
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }>, "many">>;
    formats: z.ZodArray<z.ZodObject<{
        mime_type: z.ZodString;
        max_size: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        mime_type?: string;
        max_size?: number;
    }, {
        mime_type?: string;
        max_size?: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    kind?: string;
    platform?: string;
    dimensions?: {
        kind?: "minimum" | "recommended";
        width?: number;
        height?: number;
    }[];
    margins?: {
        kind?: "recommended";
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }[];
    formats?: {
        mime_type?: string;
        max_size?: number;
    }[];
}, {
    kind?: string;
    platform?: string;
    dimensions?: {
        kind?: "minimum" | "recommended";
        width?: number;
        height?: number;
    }[];
    margins?: {
        kind?: "recommended";
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }[];
    formats?: {
        mime_type?: string;
        max_size?: number;
    }[];
}>;
type Size = z.infer<typeof SizeSchema>;
declare const DataSchema: z.ZodObject<{
    sizes: z.ZodArray<z.ZodObject<{
        platform: z.ZodString;
        kind: z.ZodString;
        dimensions: z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<["recommended", "minimum"]>;
            width: z.ZodNumber;
            height: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            kind?: "minimum" | "recommended";
            width?: number;
            height?: number;
        }, {
            kind?: "minimum" | "recommended";
            width?: number;
            height?: number;
        }>, "many">;
        margins: z.ZodOptional<z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<["recommended"]>;
            top: z.ZodNumber;
            right: z.ZodNumber;
            bottom: z.ZodNumber;
            left: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            kind?: "recommended";
            top?: number;
            right?: number;
            bottom?: number;
            left?: number;
        }, {
            kind?: "recommended";
            top?: number;
            right?: number;
            bottom?: number;
            left?: number;
        }>, "many">>;
        formats: z.ZodArray<z.ZodObject<{
            mime_type: z.ZodString;
            max_size: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            mime_type?: string;
            max_size?: number;
        }, {
            mime_type?: string;
            max_size?: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        kind?: string;
        platform?: string;
        dimensions?: {
            kind?: "minimum" | "recommended";
            width?: number;
            height?: number;
        }[];
        margins?: {
            kind?: "recommended";
            top?: number;
            right?: number;
            bottom?: number;
            left?: number;
        }[];
        formats?: {
            mime_type?: string;
            max_size?: number;
        }[];
    }, {
        kind?: string;
        platform?: string;
        dimensions?: {
            kind?: "minimum" | "recommended";
            width?: number;
            height?: number;
        }[];
        margins?: {
            kind?: "recommended";
            top?: number;
            right?: number;
            bottom?: number;
            left?: number;
        }[];
        formats?: {
            mime_type?: string;
            max_size?: number;
        }[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    sizes?: {
        kind?: string;
        platform?: string;
        dimensions?: {
            kind?: "minimum" | "recommended";
            width?: number;
            height?: number;
        }[];
        margins?: {
            kind?: "recommended";
            top?: number;
            right?: number;
            bottom?: number;
            left?: number;
        }[];
        formats?: {
            mime_type?: string;
            max_size?: number;
        }[];
    }[];
}, {
    sizes?: {
        kind?: string;
        platform?: string;
        dimensions?: {
            kind?: "minimum" | "recommended";
            width?: number;
            height?: number;
        }[];
        margins?: {
            kind?: "recommended";
            top?: number;
            right?: number;
            bottom?: number;
            left?: number;
        }[];
        formats?: {
            mime_type?: string;
            max_size?: number;
        }[];
    }[];
}>;
type Data = z.infer<typeof DataSchema>;
declare function filterSizesByPlatform(sizes: Data["sizes"], platform: string): {
    kind?: string;
    platform?: string;
    dimensions?: {
        kind?: "minimum" | "recommended";
        width?: number;
        height?: number;
    }[];
    margins?: {
        kind?: "recommended";
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }[];
    formats?: {
        mime_type?: string;
        max_size?: number;
    }[];
}[];
declare function getDimensionByKind(size: Size, kind: Dimensions["kind"]): Dimensions | undefined;
declare function getMarginByKind(size: Size, kind: Margins["kind"]): Margins | undefined;
declare function percentMarginToPixel(size: Size, margin: Margins): Margins | undefined;
declare function sortFormatByPreference(size: Size, mimeTypePreferences: Formats["mime_type"][]): Formats[] | undefined;

export { type Data, DataSchema, type Dimensions, DimensionsSchema, type Formats, FormatsSchema, type Margins, MarginsSchema, type Size, SizeSchema, filterSizesByPlatform, getDimensionByKind, getMarginByKind, percentMarginToPixel, sortFormatByPreference };
