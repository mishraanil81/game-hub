import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
const GameCardSkeletion = () => {
  return (
    <Card>
      <Skeleton height="400px"></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};
export default GameCardSkeletion;
