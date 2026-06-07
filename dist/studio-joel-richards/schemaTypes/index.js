"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaTypes = void 0;
const article_1 = require("./schemaType/article");
const resume_1 = require("./schemaType/resume");
const uploaded_articles_1 = require("./schemaType/uploaded_articles");
const contact_1 = require("./schemaType/contact");
const bio_1 = require("./schemaType/bio");
exports.schemaTypes = [
    article_1.articleType,
    resume_1.fileType,
    uploaded_articles_1.uploadedArticlesType,
    bio_1.bioType,
    contact_1.contactType
];
//# sourceMappingURL=index.js.map