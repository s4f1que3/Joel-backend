"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.articlesService = void 0;
const common_1 = require("@nestjs/common");
const sanity_service_1 = require("../sanity/sanity.service");
let articlesService = class articlesService {
    async createArticle(dto, uploadedFiles) {
        const imageRefs = await Promise.all((uploadedFiles.images ?? []).map(img => sanity_service_1.sanityServiceWithoutPublished.assets.upload('image', img.buffer, { filename: img.originalname })));
        const fileRefs = await Promise.all((uploadedFiles.files ?? []).map(file => sanity_service_1.sanityServiceWithoutPublished.assets.upload('file', file.buffer, { filename: file.originalname })));
        return sanity_service_1.sanityServiceWithoutPublished.create({
            _type: 'article',
            Title: dto.title,
            content: dto.content,
            pinned: dto.pinned,
            slug: {
                _type: 'slug',
                current: dto.title
            },
            publishedAt: new Date().toLocaleDateString('en-US'),
            images: imageRefs.map(asset => ({
                _type: 'image',
                asset: { _type: 'reference', _ref: asset._id }
            })),
            Files: fileRefs.map(asset => ({
                _type: 'file',
                asset: { _type: 'reference', _ref: asset._id }
            }))
        });
    }
    async updateArticle(id, dto, uploadedFiles) {
        const imageRefs = await Promise.all((uploadedFiles.images ?? []).map(img => sanity_service_1.sanityServiceWithoutPublished.assets.upload('image', img.buffer, { filename: img.originalname })));
        const fileRefs = await Promise.all((uploadedFiles.files ?? []).map(file => sanity_service_1.sanityServiceWithoutPublished.assets.upload('file', file.buffer, { filename: file.originalname })));
        return sanity_service_1.sanityServiceWithoutPublished.patch(id)
            .set({
            Title: dto.new_title,
            content: dto.new_content,
            pinned: dto.new_pinned,
            slug: {
                _type: 'slug',
                current: dto.new_title
            },
            publishedAt: new Date().toLocaleDateString('en-US')
        })
            .append('images', imageRefs.map(asset => ({
            _type: 'image',
            asset: { _type: 'reference', _ref: asset._id }
        })))
            .append('Files', fileRefs.map(asset => ({
            _type: 'file',
            asset: { _type: 'reference', _ref: asset._id }
        })))
            .commit();
    }
    async findAll() {
        try {
            const articles = await sanity_service_1.sanityService.fetch('*[_type == "article"]');
            return articles;
        }
        catch (error) {
            throw new Error("Error fetching articles");
        }
    }
    async findBySlug(slug) {
        try {
            const article = await sanity_service_1.sanityService.fetch('*[_type == "article" && slug.current == $slug][0]', { slug });
            return article;
        }
        catch (error) {
            throw new Error(`Error fetching article ${slug}`);
        }
    }
    async pinArticle(id) {
        try {
            const existing = await sanity_service_1.sanityService.fetch('*[_type == "article" && pinned == true][0]');
            if (existing) {
                throw new Error("There's already a pinned article");
            }
            else {
                sanity_service_1.sanityService.patch(id)
                    .set({
                    pinned: true
                }).commit();
            }
        }
        catch (error) {
            throw new Error("Error pinning article");
        }
    }
    async unpinArticle(id) {
        try {
            const existing = await sanity_service_1.sanityService.fetch('*[_type == "article" && pinned == true][0]');
            if (!existing) {
                throw new Error("No existing pinned article under this ID");
            }
            else {
                sanity_service_1.sanityService.patch(id)
                    .set({
                    pinned: false
                }).commit();
            }
        }
        catch (error) {
            throw new Error("Error unpinning article");
        }
    }
    async getPinned() {
        try {
            const pinnedArticle = await sanity_service_1.sanityService.fetch('*[_type == "article" && pinned === true][0]');
            return pinnedArticle;
        }
        catch (error) {
            throw new Error("Error fetching pinned article");
        }
    }
    async deleteArticle(id) {
        try {
            await sanity_service_1.sanityService.delete(id);
        }
        catch (error) {
            throw new Error("Error deleting post");
        }
    }
};
exports.articlesService = articlesService;
exports.articlesService = articlesService = __decorate([
    (0, common_1.Injectable)()
], articlesService);
//# sourceMappingURL=articles.service.js.map