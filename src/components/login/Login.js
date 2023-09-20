import { Box, Button, FormControl, FormLabel, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import CustomLink from "../../components/link/Link"; 

const FullScreenForm = () => {
  const initialFormData = {
    username: "",
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
    <Box as="Flex"
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
        <CustomLink as="text" to="/pageregister">
         
        <Text mt={4}     _hover={{ textDecoration: "none", color: "#0B68F4" }}>
          Ainda não tem uma conta? <a>Cadastre-se</a>
        </Text>
        
         </CustomLink>
      </Box>
    </Box>
  );
};

export default FullScreenForm;
