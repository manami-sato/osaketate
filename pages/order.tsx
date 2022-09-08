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
    <>
      <Box w="90vw" mx="auto" pt="96px">
        <Head />
        <MenuHeading data="注文確認" />
        <OriginalSpacer size="24px" />
        <OrderComponents data={orderList} />
      </Box>
      <FootCheck data={orderList} />
      <FootSend data="注文確定" />
    </>
  );
};

export default Order;
