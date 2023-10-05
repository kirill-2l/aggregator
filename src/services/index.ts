import { coreInstance } from "@/axios/core.instance";
import { AuthService } from "@/axios/auth";

export const AuthApi = AuthService(coreInstance);
