import {
	Avatar,
	Badge,
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

const Recommended = () => {
	const arr = [
		'Product 1',
		'Product 2',
		'Product 3',
		'Product 4',
		'Product 5',
		'Product 6',
		'Product 7',
		'Product 8',
		'Product 9',
		'Product 10',
		'Product 11',
		'Product 12'
	];
	return (
		<ScrollView>
			<Text color='dark.50' fontSize={20} ml={4} mt={4} bold letterSpacing='xl'>
				Featured Products
			</Text>
			<Box alignItems='center'>
				<Divider my={2} size={3} bg='emerald.400' width={'95%'} />
			</Box>
			<Flex wrap='wrap' direction='row' justifyContent='space-evenly'>
				{arr.map(item => {
					return (
						<Box
							key={Math.random()}
							bg='white'
							shadow={3}
							rounded='lg'
							w='95%'
							p={3}
							my={5}
							mx={3}>
							<HStack space={3} justifyContent='space-between' flex={1}>
								<VStack flex={4}>
									<Image
										px={1}
										source={{
											uri: 'https://picsum.photos/300'
										}}
										alt='image base'
										resizeMode='cover'
										height={[100, 50, 90]}
										roundedTop='md'
										roundedBottom='md'
									/>
									<Heading size='md' px={1}>
										{item}
									</Heading>
									<Badge
										py={1}
										px={1}
										my={3}
										borderRadius={18}
										colorScheme='success'
										maxWidth='60%'
										alignItems='center'>
										Starts from $19.99
									</Badge>
								</VStack>
								{/* <Divider orientation='vertical' /> */}
								<VStack
									alignItems='center'
									justifyContent='space-around'
									flex={2}>
									<Avatar
										m={1}
										size='md'
										source={{
											uri: 'https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg'
										}}>
										RS
									</Avatar>
									<Text isTruncated>Client name</Text>
									<Button
										variant='outline'
										colorScheme='secondary'
										// color='#e11d48'
									>
										Add To Cart
									</Button>
								</VStack>
							</HStack>
						</Box>
					);
				})}
			</Flex>
		</ScrollView>
	);
};

export default Recommended;
