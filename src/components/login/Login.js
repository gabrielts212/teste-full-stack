import { Box, Button, FormControl, FormLabel, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const FullScreenForm = () => {
  const initialFormData = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar os dados do formulário para o servidor
    console.log("Dados do formulário enviados:", formData);

    // Limpe o formulário redefinindo o estado para os valores iniciais
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
    <Box as="Flex"
      minH="100vh"
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
        borderRadius="lg"
        boxShadow="lg"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Faça login na sua conta
        </Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} width="100%" maxWidth="400px">
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
        <Text mt={4}     _hover={{ textDecoration: "none", color: "#0B68F4" }}>
          Ainda não tem uma conta? <a href="#">Cadastre-se</a>
        </Text>
      </Box>
    </Box>
  );
};

export default FullScreenForm;
