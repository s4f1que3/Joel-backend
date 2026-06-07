"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_1 = require("sanity/cli");
exports.default = (0, cli_1.defineCliConfig)({
    api: {
        projectId: 'e1j7g6w9',
        dataset: 'production'
    },
    deployment: {
        autoUpdates: true,
    }
});
//# sourceMappingURL=sanity.cli.js.map