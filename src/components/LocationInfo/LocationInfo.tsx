import { Text } from "@chakra-ui/react";
import { Character } from "../../hooks/useCharacter/useCharacter";

interface Props {
  character: Character;
}

const LocationInfo: React.FC<Props> = ({ character }) => {
  if (character.location) {
    return (
      <div>
        <Text color="#9E9E9E">Last known location:</Text>
        <Text
          fontSize="lg"
          _hover={{ color: "#FF9800", cursor: "pointer" }} 
        >
          {character.location.name}
        </Text>
      </div>
    );
  }
  return null;
};

export default LocationInfo;
