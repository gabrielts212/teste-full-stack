import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "../../assets/favicon.ico";
import CustomLink from "../link/link";

const Header = ({ title }) => {
  return (
    <Box>
      <Flex
        bg="#0c67fe"
        p={4}
        color="white"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <CustomLink to="/">
            <Image
              src={Logo}
              alt="Logo"
              width={50}
              height={50}
              cursor="pointer"
            />
          </CustomLink>
        </Box>
        <Box>
          <Text as="h1" fontSize="2xl" fontWeight="bold">
            {" "}
            {title}
          </Text>
        </Box>
        <Box color="blue.500">
          <Text></Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
