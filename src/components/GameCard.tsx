import { Card, CardBody, Flex, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { IoLogoPlaystation, IoLogoWindows } from "react-icons/io5";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={game.background_image}
        overflow="hidden"
        borderRadius="10"
      ></Image>
      <Flex direction="row">
        {game.parent_platforms.map((platform) => (
          <PlatformIcon key={platform.platform.id} platform={platform.platform.name} />
        ))}
      </Flex>
      <CardBody>
        <Heading fontSize="2x1">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

const PlatformIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "PC": {
      return <IoLogoWindows />;
    }
    case "PlayStation": {
      return <IoLogoPlaystation />;
    }
    default:
      return null;
  }
}


export default GameCard;