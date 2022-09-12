import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  data: string;
  changeState: any;
};

const FootOrder: FC<Props> = ({ data, changeState }) => {
  const sendState = () => {
    changeState(true);
  };
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="80px"
      color="white"
      bg="orange"
      fontSize="2rem"
      fontWeight="bold"
      pos="fixed"
      inset="auto 0 0 0"
      boxShadow="0 0 12px rgba(0, 0, 0, 0.1)"
      onClick={() => sendState()}
    >
      {data}
    </Flex>
  );
};

export default FootOrder;
