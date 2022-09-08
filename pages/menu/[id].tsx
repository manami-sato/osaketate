import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { menuNav } from '../../src/libs/menu';
import { menuNavItemTypes } from '../../src/types/menu';

type Props = {
  data: menuNavItemTypes;
};

const Home: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Text as="h2">{data.title}</Text>
      {/* <Box as="img" src={food_01.jpeg}></Box> */}
    </>
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
