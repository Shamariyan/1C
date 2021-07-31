import {
	Avatar,
	Box,
	Divider,
	HStack,
	Heading,
	Icon,
	ScrollView,
	Text,
	VStack,
	View
} from 'native-base';

import ACC from '../../../acc';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

const Profile = () => {
	const arr = ['Orders', 'Address', 'Payment Options', 'Points', 'Wishlist'];

	return (
		<Box>
			<HStack justifyContent='flex-start' alignItems='center' mx={6} my={10}>
				<Avatar
					m={5}
					size='lg'
					source={{
						uri: 'https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg'
					}}>
					RS
					<Avatar.Badge borderColor='papayawhip' bg='#059669' />
				</Avatar>
				<Box justifyContent='center' alignItems='center' m={8}>
					<Heading size='md' letterSpacing='xl'>
						{' '}
						Trusty Bytes{' '}
					</Heading>
					<Text color='gray.400'> +91 123456789</Text>
				</Box>
				<Icon as={<MaterialIcons name='edit' />} size='sm' color='#e11d48' />
			</HStack>

			<VStack mx={10}>
				<HStack alignItems='center'>
					<Icon
						as={<MaterialIcons name='reorder' />}
						size='md'
						color='#e11d48'
					/>
					<Text px={8} fontSize={20} py={5}>
						Orders
					</Text>
				</HStack>
				<Divider />
				<HStack alignItems='center'>
					<Icon
						as={<MaterialIcons name='location-city' />}
						size='md'
						color='#e11d48'
					/>
					<Text px={8} fontSize={20} py={5}>
						Address
					</Text>
				</HStack>
				<Divider />
				<HStack alignItems='center'>
					<Icon
						as={<MaterialIcons name='credit-card' />}
						size='md'
						color='#e11d48'
					/>
					<Text px={8} fontSize={20} py={5}>
						Payment Options
					</Text>
				</HStack>
				<Divider />
				<HStack alignItems='center'>
					<Icon as={<MaterialIcons name='bolt' />} size='md' color='#e11d48' />
					<Text px={8} fontSize={20} py={5}>
						Points
					</Text>
				</HStack>
				<Divider />
				<HStack alignItems='center'>
					<Icon
						as={<MaterialIcons name='favorite' />}
						size='md'
						color='#e11d48'
					/>
					<Text px={8} fontSize={20} py={5}>
						Wishlist
					</Text>
				</HStack>
				<Divider />
				<HStack alignItems='center'>
					<Icon
						as={<MaterialIcons name='logout' />}
						size='md'
						color='#e11d48'
					/>
					<Text px={8} fontSize={20} py={5}>
						Log Out
					</Text>
				</HStack>
			</VStack>
		</Box>
	);
};

export default Profile;
