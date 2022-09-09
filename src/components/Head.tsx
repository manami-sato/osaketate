import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { imgPath } from '../libs/imgPath';
import NextLink from 'next/link';

const Head: FC = () => {
  return (
    <Flex
      as="header"
      bg="white"
      borderBottomColor="lightGray"
      borderBottomStyle="solid"
      borderBottomWidth="2px"
      pos="fixed"
      inset="0 0 auto 0"
    >
      <NextLink href="/" passHref>
        <Flex
          as="a"
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="64px"
        >
          <Box as="img" src={imgPath + 'logo_bar.png'} h="30%" />
        </Flex>
      </NextLink>
    </Flex>
  );
};

export default Head;
