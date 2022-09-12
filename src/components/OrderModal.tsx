import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import order from '../assets/svg/icon_order';

import NextLink from 'next/link';
import OriginalSpacer from './OriginalSpacer';

type Props = {
  title: string;
  text: string;
  img: any;
};

const OrderModal: FC<Props> = ({ title, text, img }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100vw"
      h="100vh"
      pos="fixed"
      inset="0 0 0 0"
    >
      <Box w="100%" h="100%" bg="rgba(0, 0, 0, 0.6)" />
      <Box
        w="80vw"
        maxW="280px"
        pos="absolute"
        zIndex="3"
        borderRadius="16px"
        overflow="hidden"
      >
        <Box bg="white" p="24px 16px">
          <Flex
            justifyContent="center"
            alignItems="center"
            w="55%"
            h="144px"
            mx="auto"
          >
            <Box as={img} objectFit="contain" />
          </Flex>
          <OriginalSpacer size="12px" />
          <Text fontSize="1.6rem" fontWeight="bold" color="orange">
            {title}
          </Text>
          <OriginalSpacer size="8px" />
          <Text fontSize="1.3rem">{text}</Text>
        </Box>
        <NextLink href="/" passHref>
          <Flex
            as="a"
            display="flex"
            justifyContent="center"
            alignItems="center"
            w="100%"
            h="64px"
            color="white"
            bg="orange"
            fontWeight="bold"
          >
            トップページへ戻る
          </Flex>
        </NextLink>
      </Box>
    </Flex>
  );
};

export default OrderModal;
