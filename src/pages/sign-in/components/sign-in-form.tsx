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
import { loginActions } from "../slice";

export const SignInForm = () => {
  const dispatch = useAppDispatch();
  // const username = useSelector(getLoginUsername);
  // const password = useSelector(getLoginPassword);
  // const isLoading = useSelector(getLoginIsLoading);
  // const error = useSelector(getLoginError);
  // const forceUpdate = useForceUpdate();

  const onChangeUsername = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(loginActions.setUsername(e.target.value));
    },
    [dispatch]
  );

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
          <Input type="password" />
        </FormControl>
        <Flex>
          <Link href={AppRoutes.SignUp} fontSize="sm">
            {"Don't have account yet?"}
          </Link>
        </Flex>
        <Flex>
          <Button>Login</Button>
        </Flex>
      </Box>
    </Flex>
  );
};
function useAppDispatch() {
  throw new Error("Function not implemented.");
}
