import { Button, useColorMode } from "@chakra-ui/react";
import { CSSObject } from "@emotion/react";

const SignupInButton = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "#1A202C" : "white";
  const hoverBgColor = colorMode === "dark" ? "#F51767" : "#F51767";

  const buttonStyles: CSSObject = {
    background: bgColor,
    border: "1px solid #F51767",
    "&:hover": {
      background: hoverBgColor,
    },
  };

  return (
    <>
      <Button sx={buttonStyles}>SIGN UP</Button>
      <Button sx={buttonStyles}>SIGN IN</Button>
    </>
  );
};

export default SignupInButton;
