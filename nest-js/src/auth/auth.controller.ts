import { Controller, Post, HttpCode, Body, UseGuards} from "@nestjs/common";
import { authService } from "./auth.service";
import { authDTO, newAuthDTO } from "./auth.dto";
import { AuthGuard } from "./auth.guard";

@Controller('auth')
export class authController {
    constructor(private readonly auth: authService){}

    @Post('sign-in')
    @HttpCode(200)
    async signIn (@Body() dto: authDTO) {
        return this.auth.signIn(dto)
    }

    @Post('sign-out')
    @HttpCode(200)
    async signOut () {
        return this.auth.signOut()
    }

    @Post('send-otp')
    @UseGuards(AuthGuard)
    @HttpCode(200)
    async sendOTP (@Body() dto: authDTO) {
        return this.auth.sendOtp(dto.email)
    }

    @Post('verify-otp')
    @HttpCode(200)
    async verifyOTP (@Body() dto: authDTO) {
        return this.auth.verifyOTP(dto.email, dto.token)
    }

    @Post('verify-password')
    @HttpCode(200)
    async verifyPassword (@Body() dto: authDTO) {
        return this.auth.verfiyPassword(dto.email, dto.password)
    }

    @Post('change-email')
    @UseGuards(AuthGuard)
    @HttpCode(200)
    async changeEmail (@Body() email: string, token: string, dto: newAuthDTO) {
        return this.auth.changeEmail(email, token, dto)
    }

    @Post('change-password')
    @UseGuards(AuthGuard)
    @HttpCode(200)
    async changePassword (@Body() email: string, token: string, password: string, dto: newAuthDTO) {
        return this.auth.changePassword(email, token, password, dto)
    }
}