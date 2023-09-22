import { Button } from "@chakra-ui/react";

function MyButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}

export default MyButton;
