import { Box, Divider, Text, VStack } from 'native-base';

import React from 'react';

const ACC = () => {
	return (
		<Box>
			<VStack>
				<Text size='lg'>Orders</Text>
				<Divider />
				<Text size='lg'>Address</Text>
				<Divider />
				<Text size='lg'>Payment Options</Text>
				<Divider />
				<Text size='lg'>Points</Text>
				<Divider />
				<Text size='lg'>Wishlist</Text>
				<Divider />
			</VStack>
		</Box>
	);
};

export default ACC;
