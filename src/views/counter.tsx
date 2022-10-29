import * as React from 'react';
import { useState } from 'react';
import { 
	Box, 
	Button, 
	Center, 
	Flex
} from '@chakra-ui/react';
 
const Counter: React.FC = () => {

	const [count, setCount] = useState(localStorage.getItem("count") ?? 0);

	window.onunload = () => {
		localStorage.setItem("count", count.toString());
	};

	return (
		<Box mt='2rem'>
			<Center>
				<Button
					onClick={() => setCount(y => Number(y) + 1)}
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
