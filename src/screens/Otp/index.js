import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';

import React from 'react';

const OtpScreen = ({ navigation }) => {
	const [t1, sett1] = useState('');
	const [t2, sett2] = useState('');
	const [t3, sett3] = useState('');
	const [t4, sett4] = useState('');
	const [Otp, setOtp] = useState('');

	const { number, otp } = useSelector(state => state.loginReducer);

	const a = useRef();
	const b = useRef();
	const c = useRef();
	const d = useRef();

	const verifyOtp = () => {
		setOtp(t1 + t2 + t3 + t4);
		navigation.navigate('Location');
	};

	const goBack = () => {
		navigation.navigate('Login');
	};

	return (
		<View style={styles.container}>
			<View>
				<Text
					style={{ fontSize: 16, textAlign: 'center', paddingVertical: '5%' }}>
					Enter the OTP sent to <Text>+91 {number}</Text>
				</Text>
			</View>
			<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
				<TextInput
					style={styles.input}
					ref={a}
					maxLength={1}
					textAlign='center'
					fontSize={20}
					keyboardType='numeric'
					value={t1}
					onChangeText={text => {
						if (text.length === 1) {
							b.current.focus();
						}
						sett1(text);
					}}
				/>
				<TextInput
					style={styles.input}
					ref={b}
					maxLength={1}
					textAlign='center'
					fontSize={20}
					keyboardType='numeric'
					value={t2}
					onChangeText={text => {
						if (text.length === 1) {
							c.current.focus();
						}
						sett2(text);
					}}
				/>
				<TextInput
					style={styles.input}
					ref={c}
					maxLength={1}
					textAlign='center'
					fontSize={20}
					keyboardType='numeric'
					value={t3}
					onChangeText={text => {
						if (text.length === 1) {
							d.current.focus();
						}
						sett3(text);
					}}
				/>
				<TextInput
					style={styles.input}
					ref={d}
					maxLength={1}
					textAlign='center'
					fontSize={20}
					keyboardType='numeric'
					value={t4}
					onChangeText={text => {
						sett4(text);
					}}
				/>
			</View>
			<View style={{ alignItems: 'center', paddingVertical: '5%' }}>
				<Button title='Verify' color='#ef4444' onPress={verifyOtp} />
			</View>
			<Text style={{ textAlign: 'center', fontSize: 16 }}>
				Need us to verify a different number?
				<Text
					style={{
						color: '#ef4444',
						textDecorationStyle: 'solid',
						textDecorationColor: '#ef4444'
					}}
					onPress={goBack}>
					{''} Click here
				</Text>
			</Text>
		</View>
	);
};

export default OtpScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	input: {
		borderBottomColor: 'black',
		borderRightColor: '#fff',
		borderLeftColor: '#fff',
		borderTopColor: '#fff',
		width: '10%',
		borderWidth: 1,
		margin: '2%'
	}
});
