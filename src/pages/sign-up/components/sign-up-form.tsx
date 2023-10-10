import { useSignUpMutation } from "@/services/auth";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { NextAuthProviderIds } from "@/app/api/auth/[...nextauth]/options";
import { isErrorWithMessage, isFetchBaseQueryError } from "@/shared/helpers";

export const SignUpForm = () => {
  const [signUp, { isLoading, error }] = useSignUpMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const toast = useToast();

  const signUpUser = async () => {
    if (!email || !password || !name || password !== confirmPassword) return;

    try {
      const res = await signUp({ email, password, name }).unwrap();

      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        isClosable: true,
      });

      // wtf?
      const user = { ...res.user };

      await signIn(NextAuthProviderIds.usernameLogin, {
        email: user.email,
        password: user.password,
        redirect: false,
      });

      toast({
        title: "You successfully authorized",
        status: "success",
        isClosable: true,
      });
    } catch (err) {
      let errorMsg;
      if (isFetchBaseQueryError(err)) {
        errorMsg = "error" in err ? err.error : JSON.stringify(err.data);
      }

      if (isErrorWithMessage(err)) {
        errorMsg = err.message;
      }

      errorMsg &&
        toast({
          title: "Error",
          description: errorMsg,
          status: "error",
          isClosable: true,
        });
    }
  };

  return (
    <Flex justifyContent="center">
      <Box
        display="grid"
        gridGap={4}
        gridAutoFlow="row dense"
        maxW={600}
        w="100%"
        p={16}
        borderRadius={4}
        border="1px"
        borderColor="gray.200"
      >
        <Heading mb={4}>Sign up</Heading>

        <FormControl>
          <FormLabel>Your name</FormLabel>
          <Input
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Confirm password</FormLabel>
          <Input
            value={confirmPassword || ""}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
