import { authService } from "./auth.service";
import { authDTO, newAuthDTO } from "./auth.dto";
export declare class authController {
    private readonly auth;
    constructor(auth: authService);
    signIn(dto: authDTO): Promise<{
        user: import("@supabase/auth-js").User;
        session: import("@supabase/auth-js").Session;
        weakPassword?: import("@supabase/auth-js").WeakPassword;
    }>;
    signOut(): Promise<void>;
    sendOTP(dto: authDTO): Promise<void>;
    verifyOTP(dto: authDTO): Promise<boolean>;
    verifyPassword(dto: authDTO): Promise<boolean>;
    changeEmail(email: string, token: string, dto: newAuthDTO): Promise<{
        user: import("@supabase/auth-js").User;
    }>;
    changePassword(email: string, token: string, password: string, dto: newAuthDTO): Promise<{
        user: import("@supabase/auth-js").User;
    }>;
}
