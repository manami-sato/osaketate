import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import FootCheck from '../src/components/FootCheck';
import FootSend from '../src/components/FootSend';
import Head from '../src/components/Head';
import MenuHeading from '../src/components/MenuHeading';
import OrderComponents from '../src/components/OrderComponents';
import OriginalSpacer from '../src/components/OriginalSpacer';

const orderList = [1, 2, 3];

const Order: NextPage = () => {
  return (
    <Box as="main">
      <Head />
      <MenuHeading data="注文確認" />
      <OriginalSpacer size="24px" />
      <OrderComponents data={orderList} />
      <FootCheck data={orderList} />
      <FootSend data="注文確定" />
    </Box>
  );
};

export default Order;
