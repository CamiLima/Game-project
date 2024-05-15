import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const AgentsCardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow="hidden" maxW="200px">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default AgentsCardSkeleton;
