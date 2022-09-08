import { Flex, Text } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';

const MenuNumber: FC = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      sx={{
        '>div': {
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
        sx={{
          '&::after': {
            content: "''",
            width: '12px',
            height: '2px',
          },
        }}
      />
      <Text
        display="flex"
        justifyContent="center"
        w="64px"
        fontSize="1.6rem"
        fontWeight="bold"
      >
        0
      </Text>
      <Flex
        bg="orange"
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
      />
    </Flex>
  );
};

export default MenuNumber;
