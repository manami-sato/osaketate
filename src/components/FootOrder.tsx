import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

import NextLink from 'next/link';

const FootOrder: FC = () => {
  return (
    <Flex
      w="100%"
      h="80px"
      bg="lightGray"
      pos="fixed"
      inset="auto 0 0 0"
      boxShadow="0 0 12px rgba(0, 0, 0, 0.2)"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        w="calc(100% - 120px)"
        sx={{
          '>div': {
            justifyContent: 'center',
            alignItems: 'center',
            height: '60%',
            color: 'orange',
            background: 'white',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            fontFamily: 'price',
            letterSpacing: '0.1rem',
          },
          '>p': {
            display: 'flex',
            alignItems: 'flex-end',
            height: '60%',
            fontWeight: 'bold',
          },
        }}
      >
        <Flex w="48px">3</Flex>
        <Text m="0 16px 0 8px">点</Text>
        <Flex w="72px">1400</Flex>
        <Text m="0 0 0 8px">円</Text>
      </Flex>
      <NextLink href="/order" passHref>
        <Flex
          as="a"
          justifyContent="center"
          alignItems="center"
          w="120px"
          color="white"
          bg="orange"
          fontSize="1.6rem"
          fontWeight="bold"
        >
          注文確認
        </Flex>
      </NextLink>
    </Flex>
  );
};

export default FootOrder;
