import { IsString} from "class-validator";

export class createBioDTO {
    @IsString()
    content: string

    @IsString()
    title: string
}