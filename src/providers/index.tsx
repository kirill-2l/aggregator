"use client";

import { Chakra } from "@/providers/chakra";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Chakra>{children}</Chakra>;
}
