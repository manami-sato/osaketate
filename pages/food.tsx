import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { foodMenu, menuNav } from '../src/libs/menu';
import MenuComponents from '../src/components/MenuComponents';
import { menuNavItemTypes } from '../src/types/menu';
import Head from '../src/components/Head';
import FootOrder from '../src/components/FootOrder';
import MenuHeading from '../src/components/MenuHeading';
import OriginalSpacer from '../src/components/OriginalSpacer';

type Props = {
  data: menuNavItemTypes;
};

const Food: NextPage = () => {
  return (
    <Box w="90vw" mx="auto" pt="96px">
      <Head />
      <MenuHeading data="おつまみ" index={foodMenu.length} />
      <OriginalSpacer size="24px" />
      <MenuComponents data={foodMenu} />
      <FootOrder />
    </Box>
  );
};

export default Food;
