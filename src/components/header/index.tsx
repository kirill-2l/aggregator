import { Avatar, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { AppRoutes } from "@/shared/const";
import { useSession } from "next-auth/react";

interface NavigationItem {
  link: string;
  label: string;
}

const list: NavigationItem[] = [
  {
    label: "feed",
    link: AppRoutes.Feed,
  },
  {
    label: "profile",
    link: "#",
  },
];

export function Header() {
  const { data: session, status } = useSession();

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
        <Link href={AppRoutes.Home} fontSize="3xl" fontWeight="700">
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
        <Flex gap={6} alignItems="flex-end">
          {JSON.stringify(session)}
          {/* {session && (
            <Avatar
              name={session.user.name}
            />
          )} */}
        </Flex>
      </GridItem>
    </Grid>
  );
}
