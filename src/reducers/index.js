/**
 * Copyright 2019, Danang Galuh Tegar Prasetyo.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @flow

import AsyncStorage from '@react-native-community/async-storage';
import { Reducer, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { Action, RootActions } from '../actions';
import memory from './memory';
import user from './user';

const initialState = {
	accessToken: null,
	isNewUser: false,
	needAuth: true,
	notification: null
};

const rootReducer: Reducer = (state: State = initialState, action: Action) => {
	switch(action.type) {
		case RootActions.SET_ACCESS_TOKEN:
			return {
				...state,
				accessToken: action.payload === null ? action.payload : action.payload.accessToken,
				emailAddress: action.payload === null ? action.payload : action.payload.emailAddress,
			};
		case RootActions.SET_IS_NEW_USER:
			return {
				...state,
				isNewUser: action.payload
			};
		case RootActions.SET_NEED_AUTH:
			return {
				...state,
				needAuth: action.payload
			};
		case RootActions.SET_NOTIFICATION:
			return {
				...state,
				notification: action.payload,
			};
		default:
			return state;
	}
};

const persistConfig = {
	key: 'OFO',
	storage: AsyncStorage,
};

const createPersistConfig = (key: string) => ({
	...persistConfig,
	key,
	blacklist: [ 'isLoading', 'notification' ],
});

const reducers: Reducer = combineReducers({
	root: persistReducer(createPersistConfig('root'), rootReducer),
	user: persistReducer(createPersistConfig('user'), user),
	memory,
});

export type State = {
	[key: string]: any;
};

export default persistReducer(persistConfig, reducers);
