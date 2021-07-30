import Cart from '../screens/Cart';
import Home from '../screens/Home';
import { Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import Profile from '../screens/Profile';
import React from 'react';
import Search from '../screens/Search';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Mainbottomtabnavigation = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeBackgroundColor: '#1de1b6',

				inactiveBackgroundColor: '#fff',
				showLabel: false
			}}>
			<Tab.Screen
				name='Home'
				component={Home}
				options={{
					tabBarIcon: props => {
						return <MaterialIcons name='home' color='#ef4444' size={25} />;
					}
				}}
			/>
			<Tab.Screen
				name='Search'
				component={Search}
				options={{
					tabBarIcon: props => {
						return <MaterialIcons name='search' color='#ef4444' size={25} />;
					}
				}}
			/>
			<Tab.Screen
				name='Cart'
				component={Cart}
				options={{
					tabBarIcon: props => {
						return (
							<MaterialIcons name='shopping-cart' color='#ef4444' size={25} />
						);
					}
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={Profile}
				options={{
					tabBarIcon: props => {
						return (
							<MaterialIcons name='account-circle' color='#ef4444' size={25} />
						);
					}
				}}
			/>
		</Tab.Navigator>
	);
};

export default Mainbottomtabnavigation;
