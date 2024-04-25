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
    formats?: {
        mime_type?: string;
        max_size?: number;
    }[];
}[];
declare function getDimensionByKind(size: Size, kind: Dimensions["kind"]): Dimensions | undefined;
declare function sortFormatByPreference(size: Size, mimeTypePreferences: Formats["mime_type"][]): Formats[] | undefined;

export { type Data, DataSchema, type Dimensions, DimensionsSchema, type Formats, FormatsSchema, type Size, SizeSchema, filterSizesByPlatform, getDimensionByKind, sortFormatByPreference };
