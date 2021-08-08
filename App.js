import { NativeBaseProvider, StatusBar, extendTheme } from 'native-base';

import Home from './src/screens/Home';
import LCTNPGE from './acc';
import Locationpage from './src/screens/Location';
import Loginstacknavigation from './src/navigators/Loginstacknavigation';
import ParentComponent from './acc';
import { Provider } from 'react-redux';
import React from 'react';
import { store } from './src/redux/store';

export default function App() {
	return (
		<Provider store={store}>
			<NativeBaseProvider>
				{/* <Loginstacknavigation /> */}
				{/* <Home /> */}
				{/* <ParentComponent /> */}
				{/* <Locationpage /> */}
				<LCTNPGE />
			</NativeBaseProvider>
			<StatusBar barStyle='default' />
		</Provider>
	);
}
