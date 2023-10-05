import { AuthService } from "@/shared/services/auth";
import { AuthApi } from "@/shared/services";
import { router } from "next/client";
import { AppRoutes } from "@/shared/const";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  async function verifyUser() {
    try {
      await AuthApi.test();
    } catch (err) {
      router.push(AppRoutes.SignIn);
    }
  }

  return { children };
}
