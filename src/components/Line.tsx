import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { imgPath } from '../libs/imgPath';

const Line: FC = () => {
  return (
    <Flex justifyContent="center" alignItems="center" w="90vw" h="80px" mx="auto">
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
