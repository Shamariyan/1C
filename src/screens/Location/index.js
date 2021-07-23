import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { useSelector } from 'react-redux';

const Location = () => {
	const { number, otp } = useSelector(state => state.loginReducer);

	return (
		<View style={styles.container}>
			<Text>Location screen</Text>
			<Text>{number}</Text>
			<Text>{otp}</Text>
		</View>
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
