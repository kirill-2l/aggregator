import { AppRoutes } from "@/shared/const";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
} from "@chakra-ui/react";
import { ChangeEvent, useCallback } from "react";
import { loginActions } from "@/services/auth/login.slice";
import { useAppDispatch } from "@/providers/store/store-provider";
import { useSignInMutation } from "@/services/auth/auth.service";
import { getLoginPassword, getLoginUsername } from "@/services/auth";
import { useSelector } from "react-redux";

export const SignInForm = () => {
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const [signIn, { isLoading }] = useSignInMutation();
  const onChangeUsername = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(loginActions.setUsername(e.target.value));
    },
    [dispatch]
  );
  const onChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(loginActions.setPassword(e.target.value));
    },
    [dispatch]
  );

  const onLoginClick = async () => {
    try {
      const result = await signIn({ username, password });
    } catch (err) {
      console.log(err);
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
        <Heading>Sign in</Heading>
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input onChange={onChangeUsername} type="email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input onChange={onChangePassword} type="password" />
        </FormControl>
        <Flex>
          <Link href={AppRoutes.SignUp} fontSize="sm">
            {"Don't have account yet?"}
          </Link>
        </Flex>
        <Flex>
          <Button onClick={onLoginClick}>Login</Button>
        </Flex>
      </Box>
    </Flex>
  );
};
