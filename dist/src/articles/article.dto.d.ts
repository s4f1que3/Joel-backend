export declare class createArticleDTO {
    title: string;
    content: string;
    images?: Express.Multer.File[];
    files?: Express.Multer.File[];
    pinned: boolean;
}
export declare class updateArticleDTO {
    new_title: string;
    new_content: string;
    new_images?: Express.Multer.File[];
    new_files?: Express.Multer.File[];
    new_pinned: boolean;
}
