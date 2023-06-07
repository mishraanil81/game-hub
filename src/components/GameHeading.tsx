import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
interface props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: props) => {
  const heading = `${gameQuery.platform?.name || " "} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
