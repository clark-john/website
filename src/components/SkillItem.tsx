import { Box, Image, Flex } from '@chakra-ui/react';
import * as React from 'react';
import { Skill } from '@/skills';

const SkillItem: React.FC<Skill> = ({ name, image, alt }) => (
	<Flex alignItems='center' gap={4} p={4}>
		<Image src={image} alt={alt} height={10} />
		<Box>{name}</Box>
	</Flex>
);

export default SkillItem;
