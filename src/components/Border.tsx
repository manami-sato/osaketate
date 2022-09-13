import { Box } from '@chakra-ui/react';
import { FC } from 'react';

const Border: FC = () => {
  return (
    <Box
      borderBottomStyle="solid"
      borderBottomWidth="3px"
      borderBottomColor="lightGray"
    />
  );
};

export default Border;
