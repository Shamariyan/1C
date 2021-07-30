import {
	Box,
	Button,
	Center,
	Divider,
	Flex,
	HStack,
	Heading,
	Icon,
	IconButton,
	Image,
	NativeBaseProvider,
	ScrollView,
	Spacer,
	Stack,
	StatusBar,
	Text,
	VStack
} from 'native-base';

import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

const Searchresults = () => {
	const arr = [
		'Category 1',
		'Category 2',
		'Category 3',
		'Category 4',
		'Category 5',
		'Category 6'
	];
	return (
		<ScrollView>
			<Text color='dark.50' fontSize={20} ml={4} mt={8} bold letterSpacing='xl'>
				Product Categories
			</Text>
			<Box alignItems='center'>
				<Divider my={3} size={3} bg='emerald.400' width={'95%'} />
			</Box>
			<Flex wrap='wrap' direction='row' justifyContent='space-evenly'>
				{arr.map(item => {
					return (
						<Box
							key={Math.random()}
							m={[2, 3, 3]}
							bg='white'
							shadow={5}
							rounded='lg'
							maxWidth='90%'
							width={[120, 160, 170]}
							height={[160, 180, 180]}>
							<Image
								source={{
									uri: 'https://picsum.photos/300'
								}}
								alt='image base'
								resizeMode='cover'
								height={[20, 50, 90]}
								roundedTop='md'
							/>

							<Stack space={4} p={[4, 4, 4]}>
								<Heading size={['xs', 'lg', 'md']} noOfLines={2} py={3}>
									{item}
								</Heading>
							</Stack>
						</Box>
					);
				})}
			</Flex>
		</ScrollView>
	);
};

export default Searchresults;
