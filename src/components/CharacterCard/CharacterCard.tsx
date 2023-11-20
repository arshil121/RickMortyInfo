import { Card, CardBody, Flex, Heading, Image } from "@chakra-ui/react";
import { Character } from "../../hooks/useCharacter/useCharacter";
import OriginInfo from "../OriginInfo/OriginInfo";
import LocationInfo from "../LocationInfo/LocationInfo";
import StatusInfo from "../StatusInfo/StatusInfo";

interface Props {
  character: Character;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={character.image} />
      <CardBody>
        <Heading fontSize="2xl">{character.name}</Heading>
        <Flex>
          <StatusInfo character={character} />
          <OriginInfo character={character} />
        </Flex>
        <br />
        <LocationInfo character={character} />
      </CardBody>
    </Card>
  );
};

export default CharacterCard;
