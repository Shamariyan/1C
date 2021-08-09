import * as Location from 'expo-location';

import { Box, Center, PresenceTransition, Slide, Text } from 'native-base';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useEffect, useState } from 'react';

import React from 'react';
import { useSelector } from 'react-redux';

const LCTNPGE = () => {
	const { number, otp } = useSelector(state => state.loginReducer);

	const [location, setlocation] = useState(null);
	const [latitude, setlatitude] = useState(null);
	const [longitude, setlongitude] = useState(null);
	const [En, setEn] = useState(null);

	useEffect(() => {
		locationPermission();
	}, [latitude]);

	const locationPermission = async () => {
		const lctn = await Location.hasServicesEnabledAsync();
		setEn(lctn);
		const lctnperm = await Location.requestForegroundPermissionsAsync();
		if (JSON.stringify(lctnperm.status) !== 'granted') {
			console.log('Not granted');
		} else {
			setlocation(JSON.stringify(lctnperm.status));
			console.log('Granted');
		}
		const getlctn = await Location.getCurrentPositionAsync();
		setlatitude(getlctn.coords.latitude);
		setlongitude(getlctn.coords.longitude);
	};

	return (
		<Box flex={1} alignItems='center' justifyContent='center'>
			{latitude && longitude ? (
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
					<MapView
						style={styles.map}
						initialRegion={{
							latitude,
							longitude,
							latitudeDelta: 0.15,
							longitudeDelta: 0.15
						}}>
						<Marker coordinate={{ latitude, longitude }} />
					</MapView>
				</PresenceTransition>
			) : (
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
						{En ? (
							<>
								<Text>Location screen</Text>
								<Text>'Just a sec'</Text>
								<Text
								// onPress={nav}
								// style={{ color: '#059669' }}
								>
									Go to home
								</Text>
							</>
						) : (
							<>
								<Text>Location screen</Text>
								<Text>'Please turn on your location'</Text>
								<Text
								// onPress={nav}
								// style={{ color: '#059669' }}
								>
									Go to home
								</Text>
							</>
						)}
					</Box>
				</PresenceTransition>
			)}
		</Box>
	);
};

export default LCTNPGE;

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
