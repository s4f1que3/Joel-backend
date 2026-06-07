import { IsString, isString } from "class-validator";

export class UpdateBioDTO {
    @IsString()
    title: string

    @IsString()
    content: string
}