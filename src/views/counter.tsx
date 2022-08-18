/* eslint no-unused-vars: 0 */
/* eslint @typescript-eslint/no-unused-vars: 0 */
import * as React from 'react';
import {
  Box,
  Button,
  Center,
  Flex
} from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const countAtom = atomWithStorage('count', 0);

const Counter: React.FC = () => {
  const [count, setCount] = useAtom<number>(countAtom);
  return (
    <Box mt='2rem'>
      <Center>
        <Button
          onClick={() => setCount(count + 1)}
          py='16rem'
          px='15rem'
          borderRadius='100%'
          boxShadow='0.65rem 0.65rem 1rem 1px rgba(0, 0, 0, 0.3)'
        >
          <Flex flexDirection='column' gap={2}>
            <Box>Click Me</Box>
            <Box fontSize={20}>{count}</Box>
          </Flex>
        </Button>
      </Center>
    </Box>
  );
};

export default Counter;
