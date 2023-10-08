"use client";

import { ChakraProviderConfig } from "@/providers/chakra-provider-config";
import { StoreProvider } from "@/providers/store/store-provider";
import { NextAuthProvider } from "./next-auth-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextAuthProvider>
      <StoreProvider>
        <ChakraProviderConfig>{children}</ChakraProviderConfig>
      </StoreProvider>
    </NextAuthProvider>
  );
}
