import { Controller, Body, Post, Delete, Get, Query, UseGuards, UseInterceptors, Param, UploadedFiles, Patch} from "@nestjs/common";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { AuthGuard } from "src/auth/auth.guard";
import { uploadArticleDTO, uploadNewArticleDTO } from "./uploadArticle.dto";
import { uploadArticleService } from "./uploadArticle.service";

@Controller('upload-article')
export class uploadedArticleController{
    constructor(
        private readonly article: uploadArticleService,
    ){}

    @Post('create')
    @UseGuards(AuthGuard)
    @UseInterceptors(FileFieldsInterceptor([
        {name: 'article', maxCount: 1},
        {name: 'images', maxCount: 5},
        {name: 'files', maxCount: 5}
    ]))
    async createArticle(@Body() dto: uploadArticleDTO, @UploadedFiles() UploadedFiles: {images?: Express.Multer.File[], files?: Express.Multer.File[], article: Express.Multer.File[]}) {
        return this.article.createArticle(dto, UploadedFiles)
    }

    @Patch('update/:id')
    @UseGuards(AuthGuard)
    @UseInterceptors(FileFieldsInterceptor([
        {name: 'article', maxCount: 1},
        {name: 'images', maxCount: 5},
        {name: 'files', maxCount: 5}
    ]))
    async updateArticle(
        @Body() dto: uploadNewArticleDTO,
        @UploadedFiles() UploadedFiles: {images?: Express.Multer.File[], files?: Express.Multer.File[], article: Express.Multer.File[]},
        @Param('id') id: string
    ) {
        return this.article.updateArticle(id, dto, UploadedFiles, )
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    async getById(@Param('id') id: string) {
        return this.article.findById(id);
    }

    @Delete()
    @UseGuards(AuthGuard)
    async deleteArticle(@Query('id') id: string) {
        return this.article.deleteArticle(id)
    }
}