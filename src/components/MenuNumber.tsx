import { Flex, Text } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';

type Props = {
  history: boolean;
};

const MenuNumber: FC<Props> = ({ history }) => {
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
      {!history && (
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
      )}
      <Text
        display="flex"
        justifyContent="center"
        fontSize="1.6rem"
        fontWeight="bold"
        sx={{
          ...(!history && {
            width: '64px',
          }),
        }}
      >
        {count}
      </Text>
      {!history && (
        <Flex
          as="button"
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
      )}
    </Flex>
  );
};

export default MenuNumber;
