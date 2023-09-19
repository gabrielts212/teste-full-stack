import { Box, Flex,  Text } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import Logo from "../../assets/favicon.ico";
const Header = () => {
  return (
    <Box>
      <Flex
        bg="blue.500"
        p={4}
        color="white"
        alignItems="center"
        justifyContent="space-between"
        
      >
        <Box>
          <NextLink href="/">
          
              {/* Coloque aqui a imagem do seu logo */}
              <Image src={Logo} alt="Logo" width={50} height={50} cursor="pointer" />
           
          </NextLink>
        </Box>
        <Box>
          <NextLink href="/">
            <Text as="h1" fontSize="2xl" fontWeight="bold">
              
            </Text>
          </NextLink>
        </Box>
        <Box color="blue.500">
          <Text>{/* Conteúdo do terceiro bloco aqui */}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
