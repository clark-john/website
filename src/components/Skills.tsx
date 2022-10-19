import * as React from 'react';
import { Box, Center, Grid, VStack, useMediaQuery } from '@chakra-ui/react';
import SkillItem from '@/components/SkillItem';
import { Skill } from '@/skills';

type SkillsType = {
	content: Skill[]
};

const Skills: React.FC<SkillsType> = ({ content }) => {
	
	const skillsList = content.map(x => (
		<li key={content.indexOf(x) + 1} style={{ listStyle: 'none' }}>
			<SkillItem name={x.name} image={x.image} alt={x.alt} />
		</li>
	));

	const [isMobile] = useMediaQuery('(max-width: 520px)');

	return (
		<Center my={7}>
			<VStack>
				<Box>Current Skills:</Box>
				<Box>
					<Grid
						templateColumns={isMobile ? '40% 40%' : '30% 30% 30%'}
						alignItems='center'
						gap={5}
						justifyItems='center'
					>
						{skillsList}
					</Grid>
				</Box>
			</VStack>
		</Center>
	);
};

export default Skills;
