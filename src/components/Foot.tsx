import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import logo from '../assets/svg/logo_white';

const Foot: FC = () => {
  return (
    <Flex
      as="footer"
      justifyContent="center"
      alignItems="center"
      w="100vw"
      bg="gray"
      h="64px"
    >
      <Text color="white" fontSize="2rem">
        &copy;
      </Text>
      <Box as={logo} h="28px" />
    </Flex>
  );
};

export default Foot;
