import * as Location from 'expo-location';

import { Box, Center, PresenceTransition, Slide, Text } from 'native-base';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useEffect, useState } from 'react';

import React from 'react';
import { useSelector } from 'react-redux';

const Locationpage = ({ navigation }) => {
	const { number, otp } = useSelector(state => state.loginReducer);

	// useEffect(() => {
	// 	navigation.addListener('beforeRemove', e => {
	// 		e.preventDefault();
	// 	});
	// }, [navigation]);

	const [location, setlocation] = useState(null);
	const [locationobj, setlocationobj] = useState(null);
	const [En, setEn] = useState(null);
	useEffect(() => {
		locationPermission();
	}, [locationobj]);

	const locationPermission = async () => {
		const lctn = await Location.hasServicesEnabledAsync();
		setEn(lctn);
		const lctnperm = await Location.requestForegroundPermissionsAsync();
		setlocation(JSON.stringify(lctnperm.status));
		const getlctn = await Location.getCurrentPositionAsync();
		setlocationobj(JSON.stringify(getlctn));
	};

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
					<Text
						onPress={nav}
						// style={{ color: '#059669' }}
					>
						Go to home
					</Text>
				</Box>
				{En ? (
					<Box>
						{/* <Text>{locationobj}</Text> */}
						<Text>{location}</Text>
					</Box>
				) : (
					<Text>'disabled'</Text>
				)}
				{/* <MapView
					style={styles.map}
					initialRegion={{
						latitude: 12.988685,
						longitude: 80.220391,
						latitudeDelta: 0.15,
						longitudeDelta: 0.15
					}}>
					<Marker coordinate={{ latitude: 12.988685, longitude: 80.220391 }} />
				</MapView> */}
			</PresenceTransition>
		</Box>
	);
};

export default Locationpage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	}
});
