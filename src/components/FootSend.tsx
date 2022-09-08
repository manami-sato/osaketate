import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  data: string;
};

const FootOrder: FC<Props> = ({ data }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="88px"
      color="white"
      bg="orange"
      fontSize="2rem"
      fontWeight="bold"
      pos="fixed"
      inset="auto 0 0 0"
    >
      {data}
    </Flex>
  );
};

export default FootOrder;
