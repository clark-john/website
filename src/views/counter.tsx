import * as React from 'react';
import { 
	Box, 
	Button, 
	Center, 
	Flex
} from '@chakra-ui/react';
import { countStore } from '@/stores/countStore';
import { setCount } from '@/utils/countStorage';
 
const Counter: React.FC = () => {
	const count = countStore(s => s.count);
	const increment = countStore(s => s.increment);

	window.onunload = setCount(count);

	return (
		<Box mt='2rem'>
			<Center>
				<Button
					onClick={increment}
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
