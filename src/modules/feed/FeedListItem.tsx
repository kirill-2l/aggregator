import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/card";
import { Button, Heading, Text } from "@chakra-ui/react";

export function FeedListItem() {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Living room Sofa</Heading>
      </CardHeader>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
      <CardFooter>
        <Button>description</Button>
      </CardFooter>
    </Card>
  );
}
