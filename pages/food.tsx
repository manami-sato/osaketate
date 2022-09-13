import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { foodMenu, menuNav } from '../src/libs/menu';
import MenuComponents from '../src/components/MenuComponents';
import { menuNavItemTypes } from '../src/types/menu';
import Head from '../src/components/Head';
import FootOrder from '../src/components/FootOrder';
import MenuHeading from '../src/components/MenuHeading';
import OriginalSpacer from '../src/components/OriginalSpacer';
import Border from '../src/components/Border';
import OrderNavigation from '../src/components/OrderNavigation';

type Props = {
  data: menuNavItemTypes;
};

const Food: NextPage = () => {
  return (
    <Box as="main" w="90vw" mx="auto" p="96px 0 120px">
      <Head />
      <MenuHeading data="おつまみ" index={foodMenu.length} />
      <OriginalSpacer size="24px" />
      <MenuComponents data={foodMenu} history={false} />
      <OriginalSpacer size="24px" />
      <Border />
      <OriginalSpacer size="24px" />
      <OrderNavigation food />
      <OriginalSpacer size="24px" />
      <FootOrder />
    </Box>
  );
};

export default Food;
