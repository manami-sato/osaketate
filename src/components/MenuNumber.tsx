import { Flex, Text } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';

const MenuNumber: FC = () => {
  const [count, setCount] = useState<number>(0);

  const countDown = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  const countUp = () => {
    setCount(count + 1);
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      sx={{
        '>button': {
          justifyContent: 'center',
          alignItems: 'center',
          width: '48px',
          height: '40px',
          background: 'lightGray',
          fontSize: '2rem',
          position: 'relative',
          '&::before': {
            background: 'black',
            position: 'absolute',
            inset: '0 0 0 0',
            margin: 'auto',
          },
          '&::after': {
            background: 'black',
            position: 'absolute',
            inset: '0 0 0 0',
            margin: 'auto',
          },
        },
      }}
    >
      <Flex
        as="button"
        sx={{
          '&::after': {
            content: "''",
            width: '12px',
            height: '2px',
          },
        }}
        onClick={() => countDown()}
      />
      <Text
        display="flex"
        justifyContent="center"
        w="64px"
        fontSize="1.6rem"
        fontWeight="bold"
      >
        {count}
      </Text>
      <Flex
        as="button"
        // bg="orange"
        sx={{
          '&::before': {
            content: "''",
            width: '2px',
            height: '12px',
          },
          '&::after': {
            content: "''",
            width: '12px',
            height: '2px',
          },
        }}
        onClick={() => countUp()}
      />
    </Flex>
  );
};

export default MenuNumber;
