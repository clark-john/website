import * as React from 'react';
import { useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
	Box,
	Icon,
	useMediaQuery
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavbarMenu = () => {
	const navigate = useNavigate();
	const [isMobile] = useMediaQuery('(max-width: 720px)');

	const [isRotated, setRotated] = useState<boolean>(false);
	const reset = () => setRotated(() => false);

	return (
		<Box ml={10} position='absolute'>
			<Menu onClose={reset}>
				{/* under developemnt for mobile */}
				{!isMobile ? (
					<MenuButton
						as={Button}
						rightIcon={
							<motion.div animate={isRotated ? { rotate: 180 } : { rotate: 0 }}>
								<Icon as={FaChevronUp} />
							</motion.div>
						}
						onClick={() => setRotated(x => !x)}
					>
						Menu
					</MenuButton>
				) : (
					<MenuButton
						as={Box}
						onClick={() => setRotated(x => !x)}
						style={{ transform: 'translate(-10px, 2px)' }}
					>
						<motion.div animate={isRotated ? { rotate: 180 } : { rotate: 0 }}>
							<Icon as={FaChevronUp} />
						</motion.div>
					</MenuButton>
				)}
				<MenuList>
					<MenuItem onClick={() => navigate('/about')}>About</MenuItem>
					<MenuItem onClick={() => navigate('/counter')}>Counter</MenuItem>
				</MenuList>
			</Menu>
		</Box>
	);
};

export default NavbarMenu;
