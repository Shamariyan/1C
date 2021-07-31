import {
	AspectRatio,
	Avatar,
	Badge,
	Box,
	Center,
	ChevronRightIcon,
	Divider,
	HStack,
	Heading,
	Icon,
	IconButton,
	Image,
	NativeBaseProvider,
	ScrollView,
	Stack,
	Text,
	VStack
} from 'native-base';

import Cartitems from '../../components/Cartitems';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

const Cart = () => {
	return (
		<>
			<Box safeAreaTop backgroundColor='white' />
			<HStack
				bg='white'
				px={1}
				py={3}
				justifyContent='space-between'
				alignItems='center'
				shadow={5}>
				<HStack space={5} pl={3} alignItems='center'>
					<Text color='#e11d48' fontSize={18} fontWeight='bold'>
						Cart Items
					</Text>
				</HStack>
				<HStack pr={3}>
					<Badge colorScheme='success' variant='subtle' py={2}>
						Total : Rs 999.00
					</Badge>
				</HStack>
			</HStack>
			<ScrollView>
				<Box>
					<Box bg='white' shadow={3} rounded='lg' p={5} my={5} mx={3}>
						<HStack space={5} justifyContent='space-between'>
							<VStack>
								<Heading size='lg'>Product 1</Heading>
								<Text color='gray.400'>size:L , color: blue</Text>

								<Text isTruncated maxWidth='70%' noOfLines={3}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
								</Text>
								<Badge
									py={1}
									mt={4}
									borderRadius={18}
									colorScheme='danger'
									maxWidth='40%'
									alignItems='center'>
									Remove Item
								</Badge>
							</VStack>
							<Divider orientation='vertical' />
							<VStack alignItems='center'>
								<Text color='white'>.</Text>
								<Text>399.00</Text>
								<Text>-100.00</Text>
								<Heading mt={12} size='md'>
									Total
								</Heading>
								<Text>Rs.299.00</Text>
							</VStack>
						</HStack>
					</Box>
				</Box>
				<Box>
					<Box bg='white' shadow={3} rounded='lg' p={5} my={5} mx={3}>
						<HStack space={5} justifyContent='space-between'>
							<VStack>
								<Heading size='lg'>Product 2</Heading>
								<Text color='gray.400'>size:L , color: blue</Text>

								<Text isTruncated maxWidth='70%' noOfLines={3}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
								</Text>
								<Badge
									py={1}
									mt={4}
									borderRadius={18}
									colorScheme='danger'
									maxWidth='40%'
									alignItems='center'>
									Remove Item
								</Badge>
							</VStack>
							<Divider orientation='vertical' />
							<VStack alignItems='center'>
								<Text color='white'>.</Text>
								<Text>399.00</Text>
								<Text>-100.00</Text>
								<Heading mt={12} size='md'>
									Total
								</Heading>
								<Text>Rs.299.00</Text>
							</VStack>
						</HStack>
					</Box>
				</Box>
				<Box>
					<Box bg='white' shadow={3} rounded='lg' p={5} my={5} mx={3}>
						<HStack space={5} justifyContent='space-between'>
							<VStack>
								<Heading size='lg'>Product 3</Heading>
								<Text color='gray.400'>size:L , color: blue</Text>

								<Text isTruncated maxWidth='70%' noOfLines={3}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
								</Text>
								<Badge
									py={1}
									mt={4}
									borderRadius={18}
									colorScheme='danger'
									maxWidth='40%'
									alignItems='center'>
									Remove Item
								</Badge>
							</VStack>
							<Divider orientation='vertical' />
							<VStack alignItems='center'>
								<Text color='white'>.</Text>
								<Text>399.00</Text>
								<Text>-100.00</Text>
								<Heading mt={12} size='md'>
									Total
								</Heading>
								<Text>Rs.299.00</Text>
							</VStack>
						</HStack>
					</Box>
				</Box>
				<Box>
					<Box bg='white' shadow={3} rounded='lg' p={5} my={5} mx={3}>
						<HStack space={5} justifyContent='space-between'>
							<VStack>
								<Heading size='lg'>Product 4</Heading>
								<Text color='gray.400'>size:L , color: blue</Text>

								<Text isTruncated maxWidth='70%' noOfLines={3}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
								</Text>
								<Badge
									py={1}
									mt={4}
									borderRadius={18}
									colorScheme='danger'
									maxWidth='40%'
									alignItems='center'>
									Remove Item
								</Badge>
							</VStack>
							<Divider orientation='vertical' />
							<VStack alignItems='center'>
								<Text color='white'>.</Text>
								<Text>399.00</Text>
								<Text>-100.00</Text>
								<Heading mt={12} size='md'>
									Total
								</Heading>
								<Text>Rs.299.00</Text>
							</VStack>
						</HStack>
					</Box>
				</Box>
				<Box>
					<Box bg='white' shadow={3} rounded='lg' my={5} mx={3}>
						<HStack space={5} justifyContent='space-between'>
							<VStack>
								<Heading size='md' m={5}>
									Proceed To Checkout
								</Heading>
							</VStack>

							<HStack justifyContent='center' bg='#1de1b6' alignItems='center'>
								<Icon as={<MaterialIcons name='chevron-right' />} />
								<Icon as={<MaterialIcons name='chevron-right' />} />
							</HStack>
						</HStack>
					</Box>
				</Box>
			</ScrollView>
		</>
	);
};

export default Cart;
