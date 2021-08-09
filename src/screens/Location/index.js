import * as Location from 'expo-location';

import { Box, Center, PresenceTransition, Slide, Text } from 'native-base';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

const Locationpage = ({ navigation }) => {
	const { number, otp } = useSelector(state => state.loginReducer);

	const [location, setlocation] = useState(null);
	const [latitude, setlatitude] = useState(null);
	const [longitude, setlongitude] = useState(null);
	const [En, setEn] = useState(null);

	useEffect(() => {
		locationPermission();
		navigation.addListener('beforeRemove', e => {
			e.preventDefault();
		});
	}, [latitude, longitude, navigation]);

	const locationPermission = async () => {
		//Check if the location is enabled
		const isEnabled = await Location.hasServicesEnabledAsync();
		setEn(isEnabled);

		//Request to allow location permission
		const getPermission = await Location.requestForegroundPermissionsAsync();
		if (JSON.stringify(getPermission.status) !== 'granted') {
			console.log('Not granted');
			setEn(false);
		} else {
			console.log('Granted');
			setlocation(JSON.stringify(getPermission.status));
		}

		//Get the current location
		const getLocation = await Location.getCurrentPositionAsync();
		setlatitude(getLocation.coords.latitude);
		setlongitude(getLocation.coords.longitude);
	};

	const nav = () => {
		navigation.navigate('Home');
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
								<Text>{number}</Text>
								<Text>'Just a sec, Please make sure location is enabled'</Text>
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
								<Text>'Just a sec, Please make sure location is enabled'</Text>
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
