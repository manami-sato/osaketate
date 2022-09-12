import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { imgPath } from '../libs/imgPath';
import history from '../assets/svg/icon_history';
import NextLink from 'next/link';
import OriginalSpacer from './OriginalSpacer';

const Head: FC = () => {
  return (
    <Flex
      as="header"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="64px"
      bg="white"
      borderBottomColor="lightGray"
      borderBottomStyle="solid"
      borderBottomWidth="2px"
      pos="fixed"
      inset="0 0 auto 0"
    >
      <NextLink href="/" passHref>
        <Flex as="a" h="30%">
          <Box as="img" src={imgPath + 'logo_bar.png'} objectFit="contain" />
        </Flex>
      </NextLink>
      <NextLink href="/history" passHref>
        <Flex as="a" flexDirection="column" pos="absolute" right="12px">
          <Box as={history} h="28px" />
          <OriginalSpacer size="6px" />
          <Text fontSize="1.1rem" lineHeight="1.1rem">
            注文履歴
          </Text>
        </Flex>
      </NextLink>
    </Flex>
  );
};

export default Head;
