"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactType = void 0;
const sanity_1 = require("sanity");
exports.contactType = (0, sanity_1.defineType)({
    name: 'contact',
    title: 'Contact',
    type: 'document',
    preview: {
        select: {},
        prepare: () => ({ title: 'Contact' })
    },
    fields: [
        (0, sanity_1.defineField)({
            name: 'phone',
            title: "Phone Number",
            type: 'string'
        }),
        (0, sanity_1.defineField)({
            name: 'email',
            title: 'Email',
            type: 'string'
        }),
        (0, sanity_1.defineField)({
            name: 'instagram',
            title: 'Instagram',
            type: 'string'
        }),
        (0, sanity_1.defineField)({
            name: 'linkedin',
            title: 'LinkedIn',
            type: 'string'
        })
    ]
});
//# sourceMappingURL=contact.js.map