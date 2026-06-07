import { Injectable } from "@nestjs/common";
import { sanityService, sanityServiceWithoutPublished } from "src/sanity/sanity.service";
import { createArticleDTO, updateArticleDTO } from "./article.dto";

@Injectable()
export class articlesService {

    ///// CREATE ARTICLES

    async createArticle(dto: createArticleDTO, uploadedFiles: { images?: Express.Multer.File[], files?: Express.Multer.File[] }) {
        const imageRefs = await Promise.all(
            (uploadedFiles.images ?? []).map(img =>
                sanityServiceWithoutPublished.assets.upload('image', img.buffer, { filename: img.originalname })
            )
        );

        const fileRefs = await Promise.all(
            (uploadedFiles.files ?? []).map(file =>
                sanityServiceWithoutPublished.assets.upload('file', file.buffer, { filename: file.originalname })
            )
        );

        return sanityServiceWithoutPublished.create({
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

    //// UPDATE ARTICLES

    async updateArticle(id: string, dto: updateArticleDTO, uploadedFiles: { images?: Express.Multer.File[], files?: Express.Multer.File[] }) {
        const imageRefs = await Promise.all(
            (uploadedFiles.images ?? []).map(img =>
                sanityServiceWithoutPublished.assets.upload('image', img.buffer, { filename: img.originalname })
            )
        );

        const fileRefs = await Promise.all(
            (uploadedFiles.files ?? []).map(file =>
                sanityServiceWithoutPublished.assets.upload('file', file.buffer, { filename: file.originalname })
            )
        );

        return sanityServiceWithoutPublished.patch(id)
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

    ///// GET ARTICLES

    async findAll () {
        try {
            const articles = await sanityService.fetch('*[_type == "article"]')
            return articles
        } catch (error) {
            throw new Error ("Error fetching articles")
        }
    }

    async findBySlug (slug : string) {
        try {
            const article = await sanityService.fetch(
                '*[_type == "article" && slug.current == $slug][0]', {slug}
            )

            return article

        } catch (error) {
            throw new Error (`Error fetching article ${slug}`)
        }
    }

    ///// PIN ARTICLE

    async pinArticle (id: string) {
        try {
            const existing = await sanityService.fetch('*[_type == "article" && pinned == true][0]')
            if (existing) {
                throw new Error ("There's already a pinned article")
            } else {
                sanityService.patch(id)
                .set({
                    pinned: true
                }).commit()
            }
        } catch (error) {
            throw new Error ("Error pinning article")
        }
    }

    ////// Remove pin

    async unpinArticle (id: string) {
        try {
            const existing = await sanityService.fetch('*[_type == "article" && pinned == true][0]')
            if(!existing) {
                throw new Error ("No existing pinned article under this ID")
            } else {
                sanityService.patch(id)
                .set({
                    pinned: false
                }).commit()
            }
        } catch (error) {
            throw new Error ("Error unpinning article")
        }
    }

    ///// GET PINNED ARTICLE

    async getPinned () {
        try {
            const pinnedArticle = await sanityService.fetch(
                '*[_type == "article" && pinned === true][0]'
            )

            return pinnedArticle

        } catch(error) {
            throw new Error ("Error fetching pinned article")
        }

    }

    ///// DELETE ARTICLES
    async deleteArticle (id: string) {
        try {
            await sanityService.delete(id)
        } catch (error) {
            throw new Error ("Error deleting post")
        }
    }





}
