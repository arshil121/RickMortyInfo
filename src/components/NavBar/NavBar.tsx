import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import SignupInButton from "../SignupInButton/SignupInButton";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize="60px" marginLeft="5px" />
        <HStack>
          <ColorModeSwitch />
          <SignupInButton />
        </HStack>
      </HStack>
    </>
  );
};

export default NavBar;
