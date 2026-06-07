"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadedArticlesType = void 0;
const sanity_1 = require("sanity");
exports.uploadedArticlesType = (0, sanity_1.defineType)({
    name: 'uploaded_article',
    title: 'Uploaded Articles',
    type: 'document',
    fields: [
        (0, sanity_1.defineField)({
            name: "title",
            title: 'title',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        (0, sanity_1.defineField)({
            name: 'file',
            title: 'file',
            type: 'file',
            validation: (Rule) => Rule.required()
        }),
        (0, sanity_1.defineField)({
            name: 'pinned',
            title: 'Pin',
            type: 'boolean'
        }),
        (0, sanity_1.defineField)({
            name: 'images',
            title: 'images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                }
            ],
            validation: (Rule) => Rule.max(5)
        }),
        (0, sanity_1.defineField)({
            name: 'files',
            title: 'files',
            type: 'array',
            of: [
                {
                    type: 'file',
                }
            ],
            validation: (Rule) => Rule.max(5)
        })
    ]
});
//# sourceMappingURL=uploaded_articles.js.map