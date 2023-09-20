import React, { useState } from "react";
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

const FullScreenForm = () => {
  const initialFormData = {
    username: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Dados do formulário enviados:", formData);

    setFormData(initialFormData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Cadastre-se
        </Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} width="100%" maxWidth="400px" as="flex">
            <FormControl>
              <FormLabel htmlFor="username">Nome de Usuário</FormLabel>
              <Input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                bgColor="#758599"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                bgColor="#758599"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Senha</FormLabel>
              <Input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                bgColor="#758599"
              />
            </FormControl>
            <Button type="submit" bg="#0B68F4" color="white" width="100%">
              Entrar
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default FullScreenForm;
