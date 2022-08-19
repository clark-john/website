import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container, useMediaQuery } from '@chakra-ui/react';
import Navbar from './components/navbar';

const Layout = () => {
  const [isMobile] = useMediaQuery('(max-width: 390px)');
  return (
    <Box>
      <Navbar />
      <Container maxW={isMobile ? 'container.sm' : 'container.md'}>
        <Box margin='1.5rem 0'>
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
};

export default Layout;
