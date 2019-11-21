import React, { useEffect } from 'react';
import {Alert, Platform, StatusBar, View} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import { dsn } from './sentry.json';
import { appID } from './onesignal.json';

import * as Sentry from '@sentry/react-native';
import OneSignal from 'react-native-onesignal';


const App = () => {

	const onOneSignalReceived = (notification) => {
		console.log("Notification received: ", notification);
	};

	const onOneSignalOpened = (openResult) => {
		console.log('Message: ', openResult.notification.payload.body);
		console.log('Data: ', openResult.notification.payload.additionalData);
		console.log('isActive: ', openResult.notification.isAppInFocus);
		console.log('openResult: ', openResult);
	};

	const onOneSignalInAppMessageClicked = () => {
		console.log('OneSignal InAppMessage' + arguments);
	};

	const onOneSignalIds = (device) => {
		console.log('OneSignal Device Info: ' + device);
	};

	useEffect(() => {
		Sentry.init({ dsn });
		OneSignal.init(appID);
		if (Platform.OS === 'ios') {
			OneSignal.checkPermissions((permissions) => {
				permissions = {
					alert: true,
					badge: false,
					sound: true,
				};
				OneSignal.requestPermissions(permissions);
			});
		}
		OneSignal.enableSound(true);
		OneSignal.addEventListener('received', onOneSignalReceived);
		OneSignal.addEventListener('opened', onOneSignalOpened);
		OneSignal.addEventListener('inAppMessageClicked', onOneSignalInAppMessageClicked);
		OneSignal.addEventListener('ids', onOneSignalIds);
		return () => {
			OneSignal.removeEventListener('received', onOneSignalReceived);
			OneSignal.removeEventListener('opened', onOneSignalOpened);
			OneSignal.removeEventListener('inAppMessageClicked', onOneSignalInAppMessageClicked);
			OneSignal.removeEventListener('ids', onOneSignalIds);
		};
	});

	return(
		<>
			<View style={{
				backgroundColor: '#4D2A88',
				height: Platform.OS === 'ios' ? 20 : 0,
			}}>
				<StatusBar backgroundColor="#4D2A88" barStyle="light-content" />
			</View>
			<AppNavigation/>
		</>
	)
};

export default App;
