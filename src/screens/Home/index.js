import {
	Box,
	HStack,
	Icon,
	IconButton,
	Input,
	Text,
	VStack
} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Geocoder from 'react-native-geocoding';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import Recommended from '../../components/Recommended';
import { borderColor } from 'styled-system';
import opencage from 'opencage-api-client';

const Home = () => {
	const [formattedAddress, setformattedAddress] = useState('');
	const [focussed, setfocussed] = useState(false);

	const { location } = useSelector(state => state.loginReducer);

	if (location !== {}) {
		const coords = `${location.latitude},${location.longitude}`;

		opencage
			.geocode({
				q: coords,
				language: 'en',
				key: '8d28391064c34eebbe4b2c2c958945e3',
				roadinfo: 1
			})
			.then(data => {
				if (data.results.length > 0) {
					const place = data.results[0];
					console.log(place.formatted);
					const formatted = `${place.components.suburb}, ${place.components.state_district} - ${place.components.postcode}, ${place.components.state}`;
					// const formatted = `${place.components.suburb} - ${place.components.postcode}`;
					setformattedAddress(formatted);
					console.log(formatted);
				} else {
					console.log('status', data.status.message);
					console.log('total_results', data.total_results);
				}
			})
			.catch(error => {
				console.log('error', error.message);
				if (error.status.code === 402) {
					console.log('Hit free trial daily limit');
				}
			});
	}

	return (
		<>
			<Box safeAreaTop backgroundColor='white' />
			<HStack
				width='100%'
				bg='white'
				px={1}
				py={2}
				justifyContent='space-between'
				alignItems='center'
				shadow={5}>
				<HStack px={2}>
					<Input
						_focus={{ borderColor: '#e11d48' }}
						// borderColor='#fff'
						onFocus={() => setfocussed(true)}
						// onSubmitEditing={() => setfocussed(false)}
						InputRightElement={
							focussed ? (
								<Icon
									as={<MaterialIcons name='search' />}
									size='sm'
									color='#e11d48'
									m={3}
								/>
							) : (
								<></>
							)
						}
						placeholder='Search for products, brands & more'
						_light={{
							placeholderTextColor: 'blueGray.400'
						}}
						_dark={{
							placeholderTextColor: 'blueGray.50'
						}}
					/>
				</HStack>
			</HStack>
			<HStack>
				<HStack space={2} px={4} py={3} alignItems='center' bg='#fff' w='100%'>
					{/* <IconButton
						icon={
							<Icon
								size='sm'
								as={<MaterialIcons name='gps-fixed' />}
								color='#e11d48'
							/>
						}
					/> */}
					<Text
						w='95%'
						color='#e11d48'
						fontSize={14}
						fontWeight='bold'
						isTruncated={true}>
						Delivering to : {formattedAddress}
					</Text>
				</HStack>
			</HStack>
			<Recommended />
		</>
	);
};

export default Home;
