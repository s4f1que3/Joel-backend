"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleType = void 0;
const sanity_1 = require("sanity");
exports.articleType = (0, sanity_1.defineType)({
    name: 'article',
    title: 'article',
    type: 'document',
    fields: [
        (0, sanity_1.defineField)({
            name: 'Title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        (0, sanity_1.defineField)({
            name: 'content',
            title: 'Content',
            type: 'string',
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
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'caption',
                            title: 'Caption',
                            type: 'string',
                        },
                        {
                            name: 'alt',
                            title: 'Alt',
                            type: 'string',
                        }
                    ],
                }
            ],
            validation: (Rule) => Rule.max(5)
        }),
        (0, sanity_1.defineField)({
            name: 'Files',
            title: 'Files',
            type: 'array',
            of: [
                {
                    type: 'file',
                    options: {
                        hotspot: true
                    },
                }
            ]
        })
    ]
});
//# sourceMappingURL=article.js.map