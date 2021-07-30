import { Box, Center, PresenceTransition, Slide, Text } from 'native-base';
import { StyleSheet, View } from 'react-native';

import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Location = ({ navigation }) => {
	const { number, otp } = useSelector(state => state.loginReducer);

	useEffect(() => {
		navigation.addListener('beforeRemove', e => {
			e.preventDefault();
		});
	}, [navigation]);

	const nav = () => {
		navigation.navigate('Home');
	};

	return (
		<Box flex={1} alignItems='center' justifyContent='center'>
			<PresenceTransition
				visible={true}
				initial={{
					opacity: 0,
					scale: 0
				}}
				animate={{
					opacity: 1,
					scale: 1,
					transition: {
						duration: 500
					}
				}}>
				<Box bg='emerald.500' p={5}>
					<Text>Location screen</Text>
					<Text>{number}</Text>
					<Text>{otp}</Text>
					<Text
						onPress={nav}
						// style={{ color: '#059669' }}
					>
						Go to home
					</Text>
				</Box>
			</PresenceTransition>
		</Box>
	);
};

export default Location;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
