import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "../../assets/favicon.ico";
import CustomLink from "../../components/link/Link"; 
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
          <CustomLink  to="/">
         
          <Image
            src={Logo}
            alt="Logo"
            width={50}
            height={50}
            cursor="pointer"
          />
          </CustomLink>
          {/* <NextLink href="/"> */}

    

          {/* </NextLink> */}
        </Box>
        <Box>
          {/* <NextLink href="/"> */}
          <Text as="h1" fontSize="2xl" fontWeight="bold"></Text>
          {/* </NextLink> */}
        </Box>
        <Box color="blue.500">
          <Text>AA</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
