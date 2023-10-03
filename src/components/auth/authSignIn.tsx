import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

export function authSignIn() {
  return (
    <Flex justifyContent="center">
      <Box
        maxW={450}
        p={16}
        borderRadius={4}
        border="1px"
        borderColor="gray.200"
      >
        <Heading mb={4}>Sign in</Heading>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <FormControl mt={4}>
          <Button colorScheme="teal">Login</Button>
        </FormControl>
      </Box>
    </Flex>
  );
}
