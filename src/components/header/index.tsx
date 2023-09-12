import { Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { AppRoutes } from "@/shared/const";

interface NavigationItem {
  link: string;
  label: string;
}

const list: NavigationItem[] = [
  {
    label: "feed",
    link: AppRoutes.FEED,
  },
  {
    label: "profile",
    link: "#",
  },
];

export function Header() {
  return (
    <Grid
      p={4}
      bg="gray.50"
      borderBottomLeftRadius="md"
      borderBottomRightRadius="md"
      templateColumns="repeat(2, 1fr)"
      gap={6}
      alignItems="center"
    >
      <GridItem>
        <Link href={AppRoutes.HOME} fontSize="3xl" fontWeight="700">
          Aggregator
        </Link>
      </GridItem>
      <GridItem display="flex" justifyItems="flex-end">
        <Flex gap={6} alignItems="flex-end">
          {list.map((i) => (
            <Link href={i.link} key={i.link}>
              {i.label}
            </Link>
          ))}
        </Flex>
      </GridItem>
    </Grid>
  );
}
