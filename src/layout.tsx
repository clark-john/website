import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navbar from './components/navbar';

const Layout = () => (
  <Box>
    <Box mb={6}>
      <Navbar />
    </Box>
    <Outlet />
  </Box>
);

export default Layout;
