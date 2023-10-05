import { coreInstance } from "@/shared/services/core.instance";
import { AuthService } from "@/shared/services/auth";

export const AuthApi = AuthService(coreInstance);
