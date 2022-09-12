import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Attention } from '../libs/Attention';
import OriginalSpacer from './OriginalSpacer';

type Props = {
  index: number;
};

const Line: FC<Props> = ({ index }) => {
  const data = Attention[index];

  return (
    <Flex
      w="92vw"
      flexDirection="column"
      borderColor="lightGray"
      borderWidth="3px"
      borderStyle="solid"
      mx="auto"
      p="12px 16px"
      pos="fixed"
      inset="auto 0 160px 0"
      borderRadius="16px"
    >
      <Text color="orange" fontWeight="bold" fontSize="1.6rem">
        {data.title}
      </Text>
      <OriginalSpacer size="8px" />
      <Text fontSize="1.3rem">{data.text}</Text>
      <OriginalSpacer size="4px" />
      {data.url !== undefined && (
        <Text
          color="orange"
          // fontWeight="bold"
          fontSize="1.3rem"
          textDecoration="underline"
        >
          {data.url} &gt;
        </Text>
      )}
    </Flex>
  );
};

export default Line;
