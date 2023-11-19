import { Button, useColorMode } from "@chakra-ui/react";

const SignupInButton = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "#1A202C" : "white";
  return (
    <>
      <Button style={{ background: bgColor, border: "1px solid #F51767" }}>
        SIGN UP
      </Button>
      <Button style={{ background: bgColor, border: "1px solid #F51767" }}>
        SIGN IN
      </Button>
    </>
  );
};

export default SignupInButton;
