import { userReducer } from "@/entities/user";
import { useSignUpMutation } from "@/services/auth";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { sign } from "crypto";
import { useState } from "react";
import { signIn } from "next-auth/react";
export const SignUpForm = () => {
  const [signUp, { isLoading }] = useSignUpMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signUpUser = async () => {
    if (!email || !password || !name) return null;
    try {
      const res = await signUp({ email, password, name });
      console.log(res);
      // const sign = signIn(undefined, {

      // })
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex justifyContent="center">
      <Box
        maxW={450}
        p={16}
        borderRadius={4}
        border="1px"
        borderColor="gray.200"
      >
        <Heading mb={4}>Sign up</Heading>

        <FormControl>
          <FormLabel>Your name</FormLabel>
          <Input onChange={(e) => setName(e.target.value)} type="text" />
        </FormControl>

        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input onChange={(e) => setEmail(e.target.value)} type="email" />
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormControl>

        <FormControl mt={4}>
          <Button disabled={isLoading} onClick={signUpUser} colorScheme="teal">
            Login
          </Button>
        </FormControl>
      </Box>
    </Flex>
  );
};
