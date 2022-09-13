import { Box, Flex, Text } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { imgPath } from '../libs/imgPath';
import { drinkMenu } from '../libs/menu';
import { menuTypes } from '../types/menu';
import MenuNumber from './MenuNumber';
import OriginalSpacer from './OriginalSpacer';

type Props = {
  data: number[];
  history: boolean;
};

const OrderComponents: FC<Props> = ({ data, history }) => {
  let hoge: any = [];
  hoge = drinkMenu.filter((item: any) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i] === item.id) {
        return true;
      }
    }
  });

  return (
    <Flex as="ul" flexDirection="column" gap="16px">
      {hoge.map((item: menuTypes, i: number) => (
        <Flex
          as="li"
          justifyContent="space-between"
          flexWrap="wrap"
          key={item.title}
          sx={{
            ...(i < hoge.length - 1 && {
              '&:after': {
                content: "''",
                width: '95%',
                height: '2px',
                background: 'lightGray',
                margin: '16px auto 0',
              },
            }),
          }}
        >
          <Box>
            <Text as="h3" fontWeight="bold" fontSize="1.6rem">
              {item.title}
            </Text>
            <OriginalSpacer size="4px" />
            <Text color="orange" fontWeight="bold">
              ¥{item.price}
            </Text>
          </Box>
          <OriginalSpacer size="16px" />
          <MenuNumber history={history} />
        </Flex>
      ))}
    </Flex>
  );
};

export default OrderComponents;
