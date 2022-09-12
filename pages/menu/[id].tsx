import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { menuNav } from '../../src/libs/menu';
import MenuComponents from '../../src/components/MenuComponents';
import { menuNavItemTypes } from '../../src/types/menu';
import Head from '../../src/components/Head';
import FootOrder from '../../src/components/FootOrder';
import MenuHeading from '../../src/components/MenuHeading';
import OriginalSpacer from '../../src/components/OriginalSpacer';
import OrderNavigation from '../../src/components/OrderNavigation';

type Props = {
  data: menuNavItemTypes;
};

const Home: NextPage<Props> = ({ data }) => {
  return (
    <Box w="90vw" mx="auto" p="96px 0 120px">
      <Head />
      <MenuHeading data={data.title} index={data.id.length} />
      <OriginalSpacer size="24px" />
      <MenuComponents index={data.id} />
      <OriginalSpacer size="24px" />
      <Box
        borderBottomStyle="solid"
        borderBottomWidth="3px"
        borderBottomColor="lightGray"
      />
      <OriginalSpacer size="16px" />
      <OrderNavigation />
      <OriginalSpacer size="24px" />
      <FootOrder />
    </Box>
  );
};

export default Home;

export const getStaticPaths = async () => {
  let id = [];
  for (let i = 0; i < menuNav.length; i++) {
    for (let i2 = 0; i2 < menuNav[i].item.length; i2++) {
      id.push(menuNav[i].item[i2].path);
    }
  }
  const paths = id.map((item) => ({ params: { id: item } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  let data: any = '';
  for (let i = 0; i < menuNav.length; i++) {
    data = menuNav[i].item.filter((item: any) => item.path === params.id);
    if (data.length !== 0) {
      break;
    }
  }
  return {
    props: {
      id: params.id,
      data: data[0],
    },
  };
};
