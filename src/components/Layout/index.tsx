import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import { Header } from "@/components/header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex alignItems="space-between" flexDirection="column" h="100%">
      <Container maxW="container.xl" mb="8">
        <Header></Header>
      </Container>
      <Container flexGrow={1} maxW="container.xl">
        {children}
      </Container>
      <Container maxW="container.xl" mt="auto">
        <Header></Header>
      </Container>
    </Flex>
  );
}
