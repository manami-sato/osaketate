import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { imgPath } from '../libs/imgPath';
import { drinkMenu } from '../libs/menu';
import { menuTypes } from '../types/menu';
import MenuNumber from './MenuNumber';
import OriginalSpacer from './OriginalSpacer';

type Props = {
  index?: number[];
  data?: menuTypes[];
  history: boolean;
};

const MenuComponents: FC<Props> = ({ index, data, history }) => {
  let hoge: any = [];
  if (index !== undefined) {
    hoge = drinkMenu.filter((item: any) => {
      for (let i = 0; i < index.length; i++) {
        if (index[i] === item.id) {
          return true;
        }
      }
    });
  } else {
    hoge = data;
  }

  return (
    <Flex
      as="ul"
      flexWrap="wrap"
      justifyContent="space-between"
    >
      {hoge.map((item: menuTypes) => (
        <Flex
          as="li"
          key={item.title}
          flexDirection="column"
          w="calc((100% - 5%)/2)"
          mb="20px"
        >
          <Flex w="100%" pt="75%" pos="relative">
            <Flex
              as="img"
              src={
                data !== undefined
                  ? imgPath + '/food_0' + item.id + '.jpeg'
                  : imgPath + '/menu_0' + item.id + '.jpeg'
              }
              h="100%"
              w="100%"
              objectFit="cover"
              pos="absolute"
              inset="0 0 0 0"
            />
          </Flex>
          <OriginalSpacer size="12px" />
          <Text as="h3" fontWeight="bold" fontSize="1.6rem">
            {item.title}
          </Text>
          <Text color="orange" fontWeight="bold">
            ¥{item.price}
          </Text>
          <OriginalSpacer size="16px" />
          <MenuNumber history={history} />
        </Flex>
      ))}
    </Flex>
  );
};

export default MenuComponents;
