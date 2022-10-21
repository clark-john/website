import * as React from 'react';
import {
	Box,
	HStack,
	VStack,
	Icon,
	Center,
	Link,
	useMediaQuery
} from '@chakra-ui/react';
import {
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaGithub,
	FaTiktok
} from 'react-icons/fa';
import dayjs from 'dayjs';

const SocialMedia: React.FC = () => {
	const [isMobile] = useMediaQuery('(max-width: 390px)');
	return (
		<Center mt={10}>
			<VStack>
				<HStack spacing={isMobile ? 5 : 7}>
					<Link href='https://www.facebook.com/cl4rk.3702' isExternal>
						<Icon as={FaFacebook} w={9} h={9} className='icon-hover' />
					</Link>
					<Link href='https://instagram.com/cl4rk_john' isExternal>
						<Icon as={FaInstagram} w={9} h={9} className='icon-hover' />
					</Link>
					<Link href='https://twitter.com/ClarkDoesTech' isExternal>
						<Icon as={FaTwitter} w={9} h={9} className='icon-hover' />
					</Link>
					<Link href='https://github.com/clark-john' isExternal>
						<Icon as={FaGithub} w={9} h={9} className='icon-hover' />
					</Link>
					<Link href='https://tiktok.com/@cl4rk_tiktok' isExternal>
						<Icon as={FaTiktok} w={9} h={9} className='icon-hover' />
					</Link>
				</HStack>
				<Box marginTop='20px !important'>{dayjs().format('MMMM DD, YYYY')}</Box>
			</VStack>
		</Center>
	);
};

export default SocialMedia;
