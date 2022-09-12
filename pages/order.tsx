import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useState } from 'react';
import AttentionModal from '../src/components/AttentionModal';
import Back from '../src/components/Back';
import FootCheck from '../src/components/FootCheck';
import FootSend from '../src/components/FootSend';
import Head from '../src/components/Head';
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
        {/* <Head /> */}
        <Back />
        <OriginalSpacer size="4px" />
        <MenuHeading data="注文確認" />
        <OriginalSpacer size="24px" />
        <OrderComponents data={orderList} />
        <FootCheck data={orderList} />
        <AttentionModal index={0} />
        <FootSend data="注文確定" changeState={changeState} />
      </Box>
      {windowFlag && (
        <OrderModal
          title="注文完了！"
          text="準備が整い次第お席にお持ちしますので、そのまましばらくお待ちください。"
          img={order}
        />
      )}
    </>
  );
};

export default Order;
