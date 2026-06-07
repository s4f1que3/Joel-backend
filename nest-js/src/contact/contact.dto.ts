import { IsString, isString } from "class-validator";

export class createContactDTO {
    @IsString()
    phone: string

    @IsString()
    email: string

    @IsString()
    instagram: string

    @IsString()
    linkedin: string
}

export class createNewContactDTO {
    @IsString()
    new_phone: string

    @IsString()
    new_email: string

    @IsString()
    new_instagram: string

    @IsString()
    new_linkedin: string
}