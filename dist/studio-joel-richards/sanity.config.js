"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sanity_1 = require("sanity");
const structure_1 = require("sanity/structure");
const vision_1 = require("@sanity/vision");
const schemaTypes_1 = require("./schemaTypes");
exports.default = (0, sanity_1.defineConfig)({
    name: 'default',
    title: 'Joel-richards',
    projectId: 'e1j7g6w9',
    dataset: 'production',
    plugins: [(0, structure_1.structureTool)(), (0, vision_1.visionTool)()],
    schema: {
        types: schemaTypes_1.schemaTypes,
    },
});
//# sourceMappingURL=sanity.config.js.map