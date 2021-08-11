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
import { useEffect } from 'react';

const Home = () => {
	// const [geocodedAddress, setgeocodedAddress] = useState(null);

	Geocoder.init('AIzaSyCmZ1Sl4g6kFeFlJaPnyffR1p1S1rYMk44');
	const { number, location } = useSelector(state => state.loginReducer);

	Geocoder.from(location.latitude, location.longitude)
		.then(json => {
			var addressComponent = json.results[0].address_components[0];
			console.log(addressComponent);
		})
		.catch(error => console.warn(error));

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
