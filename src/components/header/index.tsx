import { Container, Grid, GridItem } from "@chakra-ui/react";

export function Header() {
  return (
    <Container>
      <Grid templateColumns="repeat(2, auto)" gap={6}>
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid>
    </Container>
  );
}
