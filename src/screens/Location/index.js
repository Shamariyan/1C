import * as Location from 'expo-location';

import {
	Box,
	Button,
	Center,
	PresenceTransition,
	Slide,
	Text
} from 'native-base';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker, Overlay } from 'react-native-maps';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setLocation } from '../../redux/actions';

const Locationpage = ({ navigation }) => {
	const { number, otp } = useSelector(state => state.loginReducer);
	const dispatch = useDispatch();

	const [locationPerm, setlocationPerm] = useState(null);
	const [selectedLocation, setselectedLocation] = useState({});
	const [latitude, setlatitude] = useState(null);
	const [longitude, setlongitude] = useState(null);
	const [En, setEn] = useState(null);

	useEffect(() => {
		locationPermission();
		navigation.addListener('beforeRemove', e => {
			e.preventDefault();
		});
	}, [navigation]);

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
			setlocationPerm(JSON.stringify(getPermission.status));
		}

		//Get the current location
		const getLocation = await Location.getCurrentPositionAsync({ accuracy: 1 });
		setlatitude(getLocation.coords.latitude);
		setlongitude(getLocation.coords.longitude);
	};

	const nav = () => {
		setselectedLocation({ latitude, longitude });
		dispatch(setLocation(selectedLocation));
		console.log(selectedLocation);
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
						onPress={e => {
							setlatitude(e.nativeEvent.coordinate.latitude);
							setlongitude(e.nativeEvent.coordinate.longitude);
						}}
						style={styles.map}
						initialRegion={{
							latitude,
							longitude,
							latitudeDelta: 0.15,
							longitudeDelta: 0.15
						}}>
						<Marker
							draggable
							coordinate={{ latitude, longitude }}
							title='Your location'
							description={`${latitude}  ${longitude}`}
							onDragEnd={e => {
								setlatitude(e.nativeEvent.coordinate.latitude);
								setlongitude(e.nativeEvent.coordinate.latitude);
							}}
						/>
					</MapView>
					<Box
						style={{
							width: '100%',
							position: 'absolute',
							bottom: 50,
							alignItems: 'center'
						}}>
						<Button
							width='90%'
							backgroundColor='#1e293b'
							color='#e2e8f0'
							onPress={nav}>
							Confirm Location
						</Button>
					</Box>
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
