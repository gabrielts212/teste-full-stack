import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";
import CustomLink from "../link/link";
import { useState } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import MyButton from "../button/Button";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const handleForm = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch(`/api/user/login`, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const json = await response.json();
      if (response.status !== 200) throw new Error(json);
      setCookie("authorization", json);
      router.push("/pagebeer");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Flex
      minH="90vh"
      bg="#272727"
      color="white"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        rounded="full"
        maxW="100%"
        p={20}
        border="black"
        borderRadius="xl"
        boxShadow="xl"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={4} color="blue.500">
          Faça login na sua conta
        </Text>
        <form onSubmit={handleForm}>
          <VStack spacing={4} width="100%" maxWidth="400px" as="flex">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(event) => handleFormEdit(event, "email")}
                bgColor="#758599"
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Senha</FormLabel>
              <Input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={(event) => handleFormEdit(event, "password")}
                bgColor="#758599"
                required
              />
            </FormControl>

            <MyButton type="submit" bg="#0B68F4" color="white" width="100%">
              {" "}
              Entrar
            </MyButton>

            {error && <p>{error}</p>}
          </VStack>
        </form>
        <CustomLink to="/cadastro">
          <Text mt={4} _hover={{ color: "#0B68F4" }}>
            Ainda não tem uma conta? Cadastre-se
          </Text>
        </CustomLink>
      </Box>
    </Flex>
  );
};

export default Login;
