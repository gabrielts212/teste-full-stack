import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link"; 

const CustomLink = ({ to, children, ...rest }) => {
  return (
    <Link href={to} passHref>
      <ChakraLink  as="as"   _hover={{  textDecoration: "none"}}{...rest}>{children}</ChakraLink>
    </Link>
  );
};

export default CustomLink;
