"use client";

import { SessionProvider } from "next-auth/react";
import { Children } from "react";

export const NextAuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => <SessionProvider>{children}</SessionProvider>;
