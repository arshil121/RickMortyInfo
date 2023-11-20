import { Character } from "../../hooks/useCharacter/useCharacter";

interface Props {
  character: Character;
}

const OriginInfo = ({ character }: Props) => {
  if (character.origin) {
    return (
      <div>
        {character.species} - {character.status}
      </div>
    );
  }
  return null;
};

export default OriginInfo;
