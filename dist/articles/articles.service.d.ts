import { createArticleDTO, updateArticleDTO } from "./article.dto";
export declare class articlesService {
    createArticle(dto: createArticleDTO, uploadedFiles: {
        images?: Express.Multer.File[];
        files?: Express.Multer.File[];
    }): Promise<import("@sanity/client").SanityDocument<{
        _type: string;
        Title: string;
        content: string;
        pinned: boolean;
        slug: {
            _type: string;
            current: string;
        };
        publishedAt: string;
        images: {
            _type: string;
            asset: {
                _type: string;
                _ref: string;
            };
        }[];
        Files: {
            _type: string;
            asset: {
                _type: string;
                _ref: string;
            };
        }[];
    }>>;
    updateArticle(id: string, dto: updateArticleDTO, uploadedFiles: {
        images?: Express.Multer.File[];
        files?: Express.Multer.File[];
    }): Promise<import("@sanity/client").SanityDocument<Record<string, any>>>;
    findAll(): Promise<any>;
    findBySlug(slug: string): Promise<any>;
    pinArticle(id: string): Promise<void>;
    unpinArticle(id: string): Promise<void>;
    getPinned(): Promise<any>;
    deleteArticle(id: string): Promise<void>;
}
