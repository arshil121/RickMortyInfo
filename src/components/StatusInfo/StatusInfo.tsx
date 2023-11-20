import { Box } from "@chakra-ui/react";
import { Character } from "../../hooks/useCharacter/useCharacter";

interface Props {
  character: Character;
}

const StatusInfo = ({ character }: Props) => {
  let circleColor = "";

  switch (character.status) {
    case "Dead":
      circleColor = "red";
      break;
    case "Alive":
      circleColor = "green";
      break;
    default:
      circleColor = "grey";
      break;
  }

  return (
    <Box display="flex" alignItems="center">
      <Box
        width="8px"
        height="8px"
        borderRadius="50%"
        marginRight="8px"
        backgroundColor={circleColor}
      />
    </Box>
  );
};

export default StatusInfo;
