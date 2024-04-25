var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var javascript_exports = {};
__export(javascript_exports, {
  DataSchema: () => DataSchema,
  DimensionsSchema: () => DimensionsSchema,
  FormatsSchema: () => FormatsSchema,
  SizeSchema: () => SizeSchema,
  filterSizesByPlatform: () => filterSizesByPlatform,
  getDimensionByKind: () => getDimensionByKind,
  sortFormatByPreference: () => sortFormatByPreference
});
module.exports = __toCommonJS(javascript_exports);
var import_zod = require("zod");
var DimensionsSchema = import_zod.z.object({
  kind: import_zod.z.enum(["recommended", "minimum"]),
  width: import_zod.z.number(),
  height: import_zod.z.number()
});
var FormatsSchema = import_zod.z.object({
  mime_type: import_zod.z.string(),
  max_size: import_zod.z.number()
});
var SizeSchema = import_zod.z.object({
  platform: import_zod.z.string(),
  kind: import_zod.z.string(),
  dimensions: import_zod.z.array(DimensionsSchema).min(1),
  formats: import_zod.z.array(FormatsSchema).min(1)
});
var DataSchema = import_zod.z.object({
  sizes: import_zod.z.array(SizeSchema)
});
function filterSizesByPlatform(sizes, platform) {
  return sizes.filter((size) => size.platform === platform);
}
function getDimensionByKind(size, kind) {
  return size.dimensions.find((dimension) => dimension.kind === kind);
}
function sortFormatByPreference(size, mimeTypePreferences) {
  return [...size.formats].sort(
    (a, b) => mimeTypePreferences.indexOf(a.mime_type) - mimeTypePreferences.indexOf(b.mime_type)
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DataSchema,
  DimensionsSchema,
  FormatsSchema,
  SizeSchema,
  filterSizesByPlatform,
  getDimensionByKind,
  sortFormatByPreference
});
