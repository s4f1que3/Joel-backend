"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileType = void 0;
const sanity_1 = require("sanity");
exports.fileType = (0, sanity_1.defineType)({
    name: 'resume',
    title: 'Resume',
    type: 'document',
    preview: {
        select: {},
        prepare: () => ({ title: 'Resume' })
    },
    fields: [
        (0, sanity_1.defineField)({
            name: 'file',
            title: 'file',
            type: 'file',
            validation: (Rule) => Rule.required()
        })
    ]
});
//# sourceMappingURL=resume.js.map