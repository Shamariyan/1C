import {
	Box,
	Button,
	Center,
	HStack,
	Icon,
	IconButton,
	NativeBaseProvider,
	StatusBar,
	Text,
	VStack
} from 'native-base';

import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import Recommended from '../../components/Recommended';

const Home = () => {
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
					<IconButton
						icon={
							<Icon
								size='sm'
								as={<MaterialIcons name='gps-fixed' />}
								color='#e11d48'
							/>
						}
					/>
					<Text color='#e11d48' fontSize={18} fontWeight='bold'>
						96, Throwpathy Amman Koil ...
					</Text>
				</HStack>
				<HStack pr={3}>
					<IconButton
						paddingRight={10}
						icon={
							<Icon
								as={<MaterialIcons name='bolt' />}
								size='sm'
								color='#e11d48'
							/>
						}
					/>
				</HStack>
			</HStack>
			<Recommended />
		</>
	);
};

export default Home;
