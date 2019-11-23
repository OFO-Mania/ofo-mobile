

import React, {useEffect, useState} from 'react';
import {Platform, StatusBar, View} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationActions } from 'react-navigation';

import {store, persistor} from './store';
import AppNavigation from './navigation/AppNavigation';
import { dsn } from '../sentry.json';
import { appID } from '../onesignal.json';

import * as Sentry from '@sentry/react-native';
import OneSignal from 'react-native-onesignal';
import {setNeedAuth} from './actions';


const App = () => {
	const [navigationRef, setNavigationRef] = useState(null);
	const accessToken = useSelector(state => state.root.accessToken);
	const isNewUser = useSelector(state => state.root.isNewUser);
	const needAuth = useSelector(state => state.root.needAuth);
	const dispatch = useDispatch();

	const onOneSignalIds = ({pushToken, userId}) => {
		AsyncStorage.setItem('openSignalDeviceID', userId);
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
		OneSignal.addEventListener('ids', onOneSignalIds);
		return () => {
			dispatch(setNeedAuth(true));
			OneSignal.removeEventListener('ids', onOneSignalIds);
		};
	});

	useEffect(() => {
		if (navigationRef !== null) {
			if (accessToken !== null) {
				navigationRef.dispatch(
					NavigationActions.navigate({
						routeName: 'SecurityCode',
					})
				);
			} else {
				if (isNewUser) {
					navigationRef.dispatch(
						NavigationActions.navigate({
							routeName: 'SuccessJoin',
						})
					);
				} else {
					if (needAuth) {
						navigationRef.dispatch(
							NavigationActions.navigate({
								routeName: 'Auth',
							})
						);
					} else {
						navigationRef.dispatch(
							NavigationActions.navigate({
								routeName: 'App',
							})
						);
					}
				}
			}
		}
	}, [navigationRef, accessToken]);

	return(
		<>
			<View style={{
				backgroundColor: '#4D2A88',
				height: Platform.OS === 'ios' ? 20 : 0,
			}}>
				<StatusBar backgroundColor="#4D2A88" barStyle="light-content" />
			</View>
			<AppNavigation ref={setNavigationRef} />
		</>
	)
};

export default () => (
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App/>
		</PersistGate>
	</Provider>
);
