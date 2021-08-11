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
import { useDispatch, useSelector } from 'react-redux';

import Geocoder from 'react-native-geocoding';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import Recommended from '../../components/Recommended';
import opencage from 'opencage-api-client';
import { useEffect } from 'react';

const Home = () => {
	// const [geocodedAddress, setgeocodedAddress] = useState(null);

	const { number, location } = useSelector(state => state.loginReducer);

	// Geocoder.init('pk.e2bb2963f007a7db4ca11f4b55376cee');
	// Geocoder.from(location.latitude, location.longitude)
	// 	.then(json => {
	// 		var addressComponent = json.results[0].address_components[0];
	// 		console.log(addressComponent);
	// 	})
	// 	.catch(error => console.warn(error));

	if (location !== {}) {
		const coords = `${location.latitude},${location.longitude}`;

		opencage
			.geocode({
				q: coords,
				language: 'en',
				key: '8d28391064c34eebbe4b2c2c958945e3'
			})
			.then(data => {
				// console.log(JSON.stringify(data));
				if (data.results.length > 0) {
					const place = data.results[0];
					console.log(place.formatted);
					console.log(place.components.road);
					console.log(place.annotations.timezone.name);
				} else {
					console.log('status', data.status.message);
					console.log('total_results', data.total_results);
				}
			})
			.catch(error => {
				console.log('error', error.message);
				if (error.status.code === 402) {
					console.log('hit free trial daily limit');
					console.log('become a customer: https://opencagedata.com/pricing');
				}
			});
	}

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
						{location.latitude}Lat
						{location.longitude}Lon
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
