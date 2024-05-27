var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
  MarginsSchema: () => MarginsSchema,
  SizeSchema: () => SizeSchema,
  filterSizesByPlatform: () => filterSizesByPlatform,
  getDimensionByKind: () => getDimensionByKind,
  getMarginByKind: () => getMarginByKind,
  percentMarginToPixel: () => percentMarginToPixel,
  sortFormatByPreference: () => sortFormatByPreference
});
module.exports = __toCommonJS(javascript_exports);
var import_zod = require("zod");
var DimensionsSchema = import_zod.z.object({
  kind: import_zod.z.enum(["recommended", "minimum"]),
  width: import_zod.z.number(),
  height: import_zod.z.number()
});
var MarginsSchema = import_zod.z.object({
  kind: import_zod.z.enum(["recommended"]),
  top: import_zod.z.number().min(0).max(1).describe("Top margin in percent of the height 0=0% 1=100%"),
  right: import_zod.z.number().min(0).max(1).describe("Right margin in percent of the width 0=0% 1=100%"),
  bottom: import_zod.z.number().min(0).max(1).describe("Bottom margin in percent of the height 0=0% 1=100%"),
  left: import_zod.z.number().min(0).max(1).describe("Left margin in percent of the width 0=0% 1=100%")
});
var FormatsSchema = import_zod.z.object({
  mime_type: import_zod.z.string(),
  max_size: import_zod.z.number()
});
var SizeSchema = import_zod.z.object({
  platform: import_zod.z.string(),
  kind: import_zod.z.string(),
  dimensions: import_zod.z.array(DimensionsSchema).min(1),
  margins: import_zod.z.array(MarginsSchema).min(1).optional(),
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
function getMarginByKind(size, kind) {
  var _a;
  return (_a = size.margins) == null ? void 0 : _a.find((margin) => margin.kind === kind);
}
function percentMarginToPixel(size, margin) {
  return __spreadProps(__spreadValues({}, margin), {
    top: Math.round(margin.top * size.dimensions[0].height),
    right: Math.round(margin.right * size.dimensions[0].width),
    bottom: Math.round(margin.bottom * size.dimensions[0].height),
    left: Math.round(margin.left * size.dimensions[0].width)
  });
}
function sortFormatByPreference(size, mimeTypePreferences) {
  return [...size.formats].sort((a, b) => {
    const aIndex = mimeTypePreferences.indexOf(a.mime_type);
    const bIndex = mimeTypePreferences.indexOf(b.mime_type);
    if (aIndex === -1)
      return 1;
    if (bIndex === -1)
      return -1;
    return aIndex - bIndex;
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DataSchema,
  DimensionsSchema,
  FormatsSchema,
  MarginsSchema,
  SizeSchema,
  filterSizesByPlatform,
  getDimensionByKind,
  getMarginByKind,
  percentMarginToPixel,
  sortFormatByPreference
});
