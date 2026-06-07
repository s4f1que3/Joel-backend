"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bioType = void 0;
const sanity_1 = require("sanity");
exports.bioType = (0, sanity_1.defineType)({
    name: 'bio',
    title: 'Biography',
    type: 'document', preview: {
        select: {},
        prepare: () => ({ title: 'Biography' })
    },
    fields: [
        (0, sanity_1.defineField)({
            name: 'content',
            title: 'Content',
            type: 'string',
            validation: (Rule) => Rule.required()
        })
    ]
});
//# sourceMappingURL=bio.js.map