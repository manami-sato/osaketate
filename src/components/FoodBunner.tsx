import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';

import NextLink from 'next/link';
import { imgPath } from '../libs/imgPath';

const FootOrder: FC = () => {
  return (
    <NextLink href="/food" passHref>
      <Flex
        as="a"
        justifyContent="center"
        alignItems="center"
        w="100%"
        h="88px"
      >
        <Box
          as="img"
          src={imgPath + '/food_01.jpeg'}
          w="90vw"
          h="100%"
          objectFit="cover"
        />
      </Flex>
    </NextLink>
  );
};

export default FootOrder;
