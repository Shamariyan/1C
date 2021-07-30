import { NativeBaseProvider, StatusBar, extendTheme } from 'native-base';

import Home from './src/screens/Home';
import Loginstacknavigation from './src/navigators/Loginstacknavigation';
import { Provider } from 'react-redux';
import React from 'react';
import { store } from './src/redux/store';

export default function App() {
	return (
		<Provider store={store}>
			<NativeBaseProvider>
				<Loginstacknavigation />
				{/* <Home /> */}
			</NativeBaseProvider>
			<StatusBar barStyle='default' />
		</Provider>
	);
}
