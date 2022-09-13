import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

const back = () => {
  window.history.back();
};

const text = '< メニューに戻る';

const Back: FC = () => {
  return (
    <Flex
      onClick={() => back()}
      color="gray"
      fontSize="1.3rem"
      textDecoration="underline"
    >
      {text}
    </Flex>
  );
};

export default Back;
