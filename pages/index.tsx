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

const Home: NextPage = () => {
  return (
    <Box p="88px 0 80px">
      <Head />
      <FoodBunner />
      <OriginalSpacer size="16px" />
      <Box w="100%" h="208px" bg="lightGray" />
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
