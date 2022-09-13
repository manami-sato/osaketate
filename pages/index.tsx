import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from '../src/components/Head';
import FootOrder from '../src/components/FootOrder';
import OriginalSpacer from '../src/components/OriginalSpacer';
import OrderNavigation from '../src/components/OrderNavigation';
import Foot from '../src/components/Foot';
import Line from '../src/components/Line';
import Border from '../src/components/Border';
import FoodBunner from '../src/components/FoodBunner';
import { imgPath } from '../src/libs/imgPath';

const Home: NextPage = () => {
  return (
    <Box p="88px 0 80px">
      <Head />
      <FoodBunner />
      <OriginalSpacer size="16px" />
      <Box
        as="img"
        src={imgPath + 'bnr_02.png'}
        w="100%"
        h="240px"
        bg="lightGray"
        objectFit="cover"
      />
      <OriginalSpacer size="24px" />
      <OrderNavigation />
      <OriginalSpacer size="24px" />
      <Border />
      <OriginalSpacer size="32px" />
      <Line />
      <OriginalSpacer size="16px" />
      <Foot />
      <FootOrder />
    </Box>
  );
};

export default Home;
