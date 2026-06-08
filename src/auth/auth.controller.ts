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

    @Post('refresh')
    @HttpCode(200)
    async refresh (@Body('refresh_token') refreshToken: string) {
        return this.auth.refreshSession(refreshToken)
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
    async changeEmail (@Body() body: { email: string; token: string; new_email: string }) {
        return this.auth.changeEmail(body.email, body.token, { new_email: body.new_email } as newAuthDTO)
    }

    @Post('change-password')
    @UseGuards(AuthGuard)
    @HttpCode(200)
    async changePassword (@Body() body: { email: string; token: string; new_password: string }) {
        return this.auth.changePassword(body.email, body.token, { new_password: body.new_password } as newAuthDTO)
    }
}