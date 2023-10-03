import { AuthService } from "@/axios/auth";
import { AuthApi } from "@/axios";
import { router } from "next/client";
import { AppRoutes } from "@/shared/const";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  async function verifyUser() {
    try {
      await AuthApi.test();
    } catch (err) {
      router.push(AppRoutes.SIGN_IN);
    }
  }

  return { children };
}
