import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useState } from 'react';
import FootCheck from '../src/components/FootCheck';
import FootSend from '../src/components/FootSend';
import MenuHeading from '../src/components/MenuHeading';
import OrderComponents from '../src/components/OrderComponents';
import OrderModal from '../src/components/OrderModal';
import OriginalSpacer from '../src/components/OriginalSpacer';

import order from '../src/assets/svg/icon_order';

const orderList = [1, 2, 3];

const Order: NextPage = () => {
  const [windowFlag, setWindowFlag] = useState<boolean>(false);
  const changeState = (isWindowFlag: boolean) => {
    setWindowFlag(isWindowFlag);
  };
  return (
    <>
      <Box as="main" pt="40px">
        <MenuHeading data="注文履歴" />
        <OriginalSpacer size="24px" />
        <OrderComponents data={orderList} />
      </Box>
      <FootCheck data={orderList} />
      <FootSend
        data="会計に進む（同テーブルの注文ストップ）"
        changeState={changeState}
      />
      {/* {windowFlag && (
        <Flex>お会計に進みますか？（これ以降の注文はできません）</Flex>
      )} */}
      {windowFlag && (
        <OrderModal
          title="お会計ができます！"
          text="お支払いはお客様ごと、またテーブル一括を選ぶことができます。（※これ以降の注文はできません。）"
          img={order}
        />
      )}
    </>
  );
};

export default Order;
