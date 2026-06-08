import { IsString, IsOptional, IsBoolean } from "class-validator";

export class createArticleDTO {
    @IsString()
    title: string;

    @IsString()
    content: string;

    @IsOptional()
    thumbnail?: Express.Multer.File[];

    @IsOptional()
    images?: Express.Multer.File[];

    @IsOptional()
    files?: Express.Multer.File[];

    @IsBoolean()
    pinned: boolean;
}

export class updateArticleDTO {
    @IsString()
    new_title: string;

    @IsString()
    new_content: string;

    @IsOptional()
    new_thumbnail?: Express.Multer.File[];

    @IsOptional()
    new_images?: Express.Multer.File[];

    @IsOptional()
    new_files?: Express.Multer.File[];

    @IsBoolean()
    new_pinned: boolean

    @IsOptional()
    remove_image_keys?: string;

    @IsOptional()
    remove_file_keys?: string;

    @IsOptional()
    remove_thumbnail?: string;
}