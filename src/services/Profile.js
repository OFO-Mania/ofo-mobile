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

import FetcherFactory, { ConfigSet } from './FetcherFactory';
import Fetcher from './Fetcher';

const fetcher = new Fetcher(new FetcherFactory(ConfigSet.RESOURCE_API));

export async function getProfile(token: string) {
	return fetcher.get('profile', Fetcher.useAuthorisation({}, token));
}

export async function modifyProfile(
	token: string,
	image: {
		name: string,
		type: string,
		uri: string
	}) {
	const formData = new FormData();
	formData.append('image', image);
	return await fetcher.patch('profile', formData, Fetcher.useAuthorisation({
		headers: { 'Content-Type': 'multipart/form-data' }
	}, token));
}
