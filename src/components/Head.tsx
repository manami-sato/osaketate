import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

const FootOrder: FC = () => {
  return (
    <Flex
      w="100%"
      h="64px"
      bg="white"
      borderBottomColor="lightGray"
      borderBottomStyle="solid"
      borderBottomWidth="2px"
      pos="fixed"
      inset="0 0 auto 0"
    ></Flex>
  );
};

export default FootOrder;
