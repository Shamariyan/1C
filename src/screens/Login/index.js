import {
	Button,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	View
} from 'react-native';
import { setOtp, setPhoneNumber } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import React from 'react';

const Login = ({ navigation }) => {
	const ref = useRef();
	useEffect(() => {
		ref.current.focus();
	}, []);

	const [err, seterr] = useState(false);
	const [phoneNumber, setphoneNumber] = useState('');

	const dispatch = useDispatch();

	const navigate = () => {
		seterr(false);
		if (
			phoneNumber.includes(',') ||
			phoneNumber.includes('.') ||
			phoneNumber.includes('-') ||
			phoneNumber.includes('*') ||
			phoneNumber.includes('(') ||
			phoneNumber.includes(')') ||
			phoneNumber.length == 0
		) {
			seterr(true);
		} else {
			dispatch(setPhoneNumber(phoneNumber));
			navigation.navigate('OtpScreen');
		}
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View
				style={{
					flex: 1,
					justifyContent: 'space-evenly',
					backgroundColor: '#fff'
				}}>
				<View>
					<Text
						style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>
						Login
					</Text>
				</View>
				<View style={styles.container}>
					<View
						style={{
							width: '70%',
							flexDirection: 'row',
							justifyContent: 'center',
							borderRadius: 10,
							overflow: 'hidden'
						}}>
						<View
							style={{
								flex: 1,
								justifyContent: 'center',
								height: 40,
								backgroundColor: 'lightgrey'
							}}>
							<Text style={{ fontSize: 20 }}>+91</Text>
						</View>
						<TextInput
							ref={ref}
							autoFocus={true}
							style={{
								height: 40,
								flex: 6,
								backgroundColor: 'lightgrey',
								fontSize: 20,
								borderWidth: err ? 1 : 0,
								borderColor: err ? '#ef4444' : 'lightgrey'
							}}
							placeholder='Enter your mobile number'
							keyboardType='number-pad'
							maxLength={10}
							autoCompleteType='tel'
							value={phoneNumber}
							onChangeText={number => {
								var a = parseInt(number);
								if (number !== ',' && number !== '.') {
									setphoneNumber(number.slice(0, -1));
								}
								if (a / a === 1) {
									setphoneNumber(number);
								} else {
									setphoneNumber(number.slice(0, -1));
								}
							}}
						/>
					</View>
					{err ? (
						<Text style={{ color: '#ef4444' }}>
							Enter a valid mobile number
						</Text>
					) : (
						<Text></Text>
					)}
					<View
						style={{
							width: '70%',
							marginTop: '5%',
							borderRadius: 10,
							overflow: 'hidden'
						}}>
						<Button title='Get OTP' color='#ef4444' onPress={navigate} />
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
