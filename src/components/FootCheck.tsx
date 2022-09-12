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
        <Text>計</Text>
        <Text color="orange" fontSize="2.2rem" lineHeight="2.2rem" mx="4px">
          {data.length}
        </Text>
        <Text>点</Text>
      </Flex>
      <Flex alignItems="flex-end">
        <Text color="orange" fontSize="2.2rem" lineHeight="2.2rem" mx="4px">
          {price}
        </Text>
        <Text>円</Text>
      </Flex>
    </Flex>
  );
};

export default FootOrder;
