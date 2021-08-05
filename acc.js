import React, { useRef } from 'react';

import { Button } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import { View } from 'native-base';

const ParentComponent = () => {
	var otpInput = useRef(null);

	const clearText = () => {
		otpInput.current.clear();
	};

	const setText = () => {
		otpInput.setValue('1234');
	};

	return (
		<View>
			<OTPTextInput ref={e => (otpInput = e)} />
			<Button title='clear' onClick={setText} />
		</View>
	);
};

export default ParentComponent;
