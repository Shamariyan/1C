import Location from '../screens/Location';
import Login from '../screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import OtpScreen from '../screens/Otp';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Loginstacknavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Login'>
				<Stack.Screen
					name='Login'
					component={Login}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='OtpScreen'
					component={OtpScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Location'
					component={Location}
					options={{ headerLeft: () => {}, headerTitleAlign: 'center' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Loginstacknavigation;
