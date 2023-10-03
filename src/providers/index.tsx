"use client";

import { ChakraProviderConfig } from "@/providers/chakraProviderConfig";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProviderConfig>{children}</ChakraProviderConfig>;
}
