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
import { Component } from 'react';

export type Action = {
	type: string;
	payload?: any;
	[key: string]: any;
};

export const RootActions = {
	SET_ACCESS_TOKEN: 'SET_ACCESS_TOKEN',
	SET_IS_NEW_USER: 'SET_IS_NEW_USER',
	SET_NEED_AUTH: 'SET_NEED_AUTH',
	SET_NOTIFICATION: 'SET_NOTIFICATION',
};

export const setAccessToken = (accessToken: string, emailAddress?: string) => ({
	type: RootActions.SET_ACCESS_TOKEN,
	payload: accessToken === null ? null : { accessToken, emailAddress },
});

export const setIsNewUser = (isNewUser: boolean = false) => ({
	type: RootActions.SET_IS_NEW_USER,
	payload: isNewUser
});

export const setNeedAuth = (needAuth: boolean = true) => ({
	type: RootActions.SET_NEED_AUTH,
	payload: needAuth
});

export const showNotification = (notification: Notification) => ({
	type: RootActions.SET_NOTIFICATION,
	payload: notification
});

export const hideNotification = () => ({
	type: RootActions.SET_NOTIFICATION,
	payload: null
});

export type Notification = {
	component?: Component,
	message?: string,
	title?: string,
	type?: 'info' | 'success' | 'warning' | 'error'
};
