import { Flex, Text } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { drinkMenu } from '../libs/menu';

type Props = {
  data: number[];
};

const FootOrder: FC<Props> = ({ data }) => {
  let hoge: any = [];
  hoge = drinkMenu.filter((item: any) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i] === item.id) {
        return true;
      }
    }
  });
  let price = 0;
  for (let i = 0; i < hoge.length; i++) {
    price += hoge[i].price;
  }

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      h="56px"
      bg="white"
      fontWeight="bold"
      px="10vw"
      pos="fixed"
      inset="auto 0 80px 0"
      boxShadow="0 0 12px rgba(0, 0, 0, 0.1)"
    >
      <Flex alignItems="flex-end">
        <Text lineHeight="1.4rem">計</Text>
        <Text
          color="orange"
          fontSize="2.6rem"
          lineHeight="2.6rem"
          mx="4px"
          fontFamily="price"
          letterSpacing="0.1rem"
        >
          {data.length}
        </Text>
        <Text lineHeight="1.4rem">点</Text>
      </Flex>
      <Flex alignItems="flex-end">
        <Text
          color="orange"
          fontSize="2.6rem"
          lineHeight="2.6rem"
          mx="4px"
          fontFamily="price"
          letterSpacing="0.1rem"
        >
          {price}
        </Text>
        <Text lineHeight="1.4rem">円</Text>
      </Flex>
    </Flex>
  );
};

export default FootOrder;
