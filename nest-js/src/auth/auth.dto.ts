import {IsString, IsEmail, IsNumber } from "class-validator";

export class authDTO {
    @IsEmail()
    email: string

    @IsString()
    password: string

    @IsString()
    token: string
}

export class newAuthDTO {
    @IsEmail()
    new_email: string

    @IsString()
    new_password: string

    @IsString()
    token: string
}