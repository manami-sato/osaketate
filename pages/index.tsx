import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from '../src/components/Head';
import FootOrder from '../src/components/FootOrder';

import NextLink from 'next/link';
import { imgPath } from '../src/libs/imgPath';
import OriginalSpacer from '../src/components/OriginalSpacer';
import OrderNavigation from '../src/components/OrderNavigation';
import Foot from '../src/components/Foot';
import Line from '../src/components/Line';

const Home: NextPage = () => {
  return (
    <Box py="88px">
      <Head />
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
      <OriginalSpacer size="16px" />
      <Box w="100%" h="208px" bg="lightGray" />
      <OrderNavigation />
      <OriginalSpacer size="24px" />
      <Line />
      <OriginalSpacer size="32px" />
      <Foot />
      <FootOrder />
    </Box>
  );
};

export default Home;
