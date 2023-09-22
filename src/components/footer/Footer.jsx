import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box bg="#0c67fe" color="white" py={4} textAlign="center">
      <div className="container mx-auto">
        <Text>
          &copy; {new Date().getFullYear()} Meu Site. Todos os direitos
          reservados.
        </Text>
      </div>
    </Box>
  );
};

export default Footer;
