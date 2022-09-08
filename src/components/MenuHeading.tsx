import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  data: string;
  index?: number;
};

const MenuHeading: FC<Props> = ({ data, index }) => {
  return (
    <Flex alignItems="center">
      <Text as="h2" w="fit-content" fontSize="2.2rem" fontWeight="bold" mr="4px">
        {data}
      </Text>
      {index !== undefined && <Text as="span">:{index}点のヒット</Text>}
    </Flex>
  );
};

export default MenuHeading;
