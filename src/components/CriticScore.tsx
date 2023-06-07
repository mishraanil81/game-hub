import { Badge } from "@chakra-ui/react";
import React from "react";
interface props {
  score: number;
}
const CriticScore = ({ score }: props) => {
  let color = score > 80 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="15px" paddingX={4} borderRadius="6px">
      {score}
    </Badge>
  );
};

export default CriticScore;
