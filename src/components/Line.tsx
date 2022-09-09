import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { imgPath } from '../libs/imgPath';

const Line: FC = () => {
  return (
    <Flex h="80px" w="90vw">
      <Box
        as="img"
        src={imgPath + 'line.png'}
        w="100%"
        h="100%"
        objectFit="contain"
      />
    </Flex>
  );
};

export default Line;
