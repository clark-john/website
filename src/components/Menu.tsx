import * as React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
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
import { atom, useAtom } from 'jotai';

const chevronAtom = atom(false);

const NavbarMenu = () => {
  const navigate = useNavigate();
  const [isMobile] = useMediaQuery('(max-width: 380px)');
  const [isRotated, rotateChevron] = useAtom<boolean>(chevronAtom);
  return (
    <Box ml={10} position='absolute'>
      <Menu onClose={() => rotateChevron(false)}>
        {/* under developemnt for mobile */}
        {!isMobile ? (
          <MenuButton
            as={Button}
            rightIcon={(
              <motion.div animate={isRotated ? { rotate: 180 } : { rotate: 0 }}>
                <Icon as={FaChevronUp} />
              </motion.div>
            )}
            onClick={() => rotateChevron(!isRotated)}
          >
            {isMobile ? <Icon as={FaChevronDown} /> : 'Menu'}
          </MenuButton>
        ) : null}
        <MenuList>
          <MenuItem onClick={() => navigate('/about')}>
            About
          </MenuItem>
          <MenuItem onClick={() => navigate('/counter')}>
            Counter
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default NavbarMenu;
