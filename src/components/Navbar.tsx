import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Grid,
  Button,
  useColorMode,
  Show
} from '@chakra-ui/react';
import NavbarMenu from './Menu';
import { FaSun, FaMoon } from 'react-icons/fa';
import '@/animations.css';

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Grid alignItems='center' boxShadow='0 0 1rem -3px black'>
      <NavbarMenu />
      <Flex justifyContent='space-around' my={4} alignItems='center'>
        <Box fontSize={29} fontWeight='normal'>
          <Link to="/">Clark</Link>
        </Box>
        <Box>
          <Show breakpoint='(min-width: 400px)'>
            {/* Under development for mobile */}
            <Link to="/about" className='link-onhover'>About</Link>
          </Show>
        </Box>
      </Flex>
      <Button position='absolute' right={10} onClick={toggleColorMode}>
        {colorMode === 'light' ? <FaMoon /> : <FaSun />}
      </Button>
    </Grid>
  );
};

export default Navbar;
