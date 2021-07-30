import {
	AspectRatio,
	Avatar,
	Badge,
	Box,
	Center,
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

import React from 'react';

const Cartitems = () => {
	return (
		<Box bg='white' shadow={2} rounded='lg' maxWidth='90%'>
			<HStack>
				<VStack>
					<Text>part1</Text>
				</VStack>
				<VStack>
					<Text>part2</Text>
				</VStack>
			</HStack>
		</Box>
	);
};

export default Cartitems;
