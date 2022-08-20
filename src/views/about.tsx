import * as React from 'react';
import { Container, Box } from '@chakra-ui/react';

/* eslint react/jsx-one-expression-per-line: 0 */
const About: React.FC = () => (
	<Container maxW='container.md'>
		<Box fontSize={48} mb={7}>
			About <span style={{ fontWeight: 'bold' }}>Clark</span>
		</Box>
		<Box>
			This GitHub page is used to store some info from my repos. <br />
		</Box>
	</Container>
);

export default About;
