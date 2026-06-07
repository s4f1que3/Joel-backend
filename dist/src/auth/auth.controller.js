"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_dto_1 = require("./auth.dto");
const auth_guard_1 = require("./auth.guard");
let authController = class authController {
    auth;
    constructor(auth) {
        this.auth = auth;
    }
    async signIn(dto) {
        return this.auth.signIn(dto);
    }
    async signOut() {
        return this.auth.signOut();
    }
    async sendOTP(dto) {
        return this.auth.sendOtp(dto.email);
    }
    async verifyOTP(dto) {
        return this.auth.verifyOTP(dto.email, dto.token);
    }
    async verifyPassword(dto) {
        return this.auth.verfiyPassword(dto.email, dto.password);
    }
    async changeEmail(email, token, dto) {
        return this.auth.changeEmail(email, token, dto);
    }
    async changePassword(email, token, password, dto) {
        return this.auth.changePassword(email, token, password, dto);
    }
};
exports.authController = authController;
__decorate([
    (0, common_1.Post)('sign-in'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.authDTO]),
    __metadata("design:returntype", Promise)
], authController.prototype, "signIn", null);
__decorate([
    (0, common_1.Post)('sign-out'),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], authController.prototype, "signOut", null);
__decorate([
    (0, common_1.Post)('send-otp'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.authDTO]),
    __metadata("design:returntype", Promise)
], authController.prototype, "sendOTP", null);
__decorate([
    (0, common_1.Post)('verify-otp'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.authDTO]),
    __metadata("design:returntype", Promise)
], authController.prototype, "verifyOTP", null);
__decorate([
    (0, common_1.Post)('verify-password'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.authDTO]),
    __metadata("design:returntype", Promise)
], authController.prototype, "verifyPassword", null);
__decorate([
    (0, common_1.Post)('change-email'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, auth_dto_1.newAuthDTO]),
    __metadata("design:returntype", Promise)
], authController.prototype, "changeEmail", null);
__decorate([
    (0, common_1.Post)('change-password'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, auth_dto_1.newAuthDTO]),
    __metadata("design:returntype", Promise)
], authController.prototype, "changePassword", null);
exports.authController = authController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.authService])
], authController);
//# sourceMappingURL=auth.controller.js.map