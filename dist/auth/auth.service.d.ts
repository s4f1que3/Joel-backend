import { authDTO, newAuthDTO } from "./auth.dto";
import { supabaseService } from "../supabase/supabase.service";
export declare class authService {
    private readonly supabase;
    constructor(supabase: supabaseService);
    signIn(dto: authDTO): Promise<{
        user: import("@supabase/auth-js").User;
        session: import("@supabase/auth-js").Session;
        weakPassword?: import("@supabase/auth-js").WeakPassword;
    }>;
    signOut(): Promise<void>;
    sendOtp(email: string): Promise<void>;
    verifyOTP(email: string, token: string): Promise<boolean>;
    verfiyPassword(email: string, password: string): Promise<boolean>;
    changeEmail(email: string, token: string, dto: newAuthDTO): Promise<{
        user: import("@supabase/auth-js").User;
    }>;
    changePassword(email: string, token: string, password: string, dto: newAuthDTO): Promise<{
        user: import("@supabase/auth-js").User;
    }>;
}
