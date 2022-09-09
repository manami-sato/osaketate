import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { menuNav } from '../libs/menu';
import { menuNavItemTypes, menuNavTypes } from '../types/menu';
import OriginalSpacer from './OriginalSpacer';
import NextLink from 'next/link';

const OrderNavigation: FC = () => {
  return (
    <Flex flexDirection="column" gap="24px" w="90vw" mx="auto">
      {menuNav.map((type: menuNavTypes, i: number) => (
        <Flex
          key={type.title + i}
          flexDirection="column"
          gap="12px"
          fontSize="1.6rem"
        >
          <Flex as="h2" fontWeight="bold">
            {type.title}
          </Flex>
          <Flex as="ul" flexWrap="wrap" gap="8px">
            {type.item.map((item: menuNavItemTypes, i: number) => (
              <Flex
                as="li"
                key={item.path}
                w="fit-content"
                color="white"
                bg="orange"
                fontWeight="bold"
                borderRadius="9999px"
              >
                <NextLink href={'/menu/' + item.path} passHref>
                  <Text as="a" display="flex" w="100%" p="12px 24px">
                    {item.title}
                  </Text>
                </NextLink>
              </Flex>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default OrderNavigation;
