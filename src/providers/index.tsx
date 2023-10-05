"use client";

import { ChakraProviderConfig } from "@/providers/chakra-provider-config";
import { StoreProvider } from "@/providers/store/store-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <ChakraProviderConfig>{children}</ChakraProviderConfig>
    </StoreProvider>
  );
}
