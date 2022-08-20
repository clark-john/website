import * as React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import '@/animations.css';
import { skills } from '@/skills';
import Strong from '@/components/strong';
import Skills from '@/components/Skills';
import SocialMedia from '@/components/SocialMedia';

/* eslint react/jsx-one-expression-per-line: 0 */
const Index: React.FC = () => (
	<Box>
		<VStack alignItems='start' spacing={4}>
			<Box fontSize={48}>
				Welcome to my <Strong>GitHub Page</Strong>
				:&#41;
			</Box>
			<Box fontSize={20}>
				Hi there, <Strong>I&apos;m Clark.</Strong> A{' '}
				<span className='link-onload'>coder</span> in this{' '}
				<Strong>GitHub</Strong> platform. I usually do coding for fun.
			</Box>
		</VStack>
		<Skills content={skills} />
		<SocialMedia />
	</Box>
);

export default Index;
