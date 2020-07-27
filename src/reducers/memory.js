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

/**
 * @format
 * @flow
 */

import {Reducer} from 'redux';

import {Action} from '../actions';
import {MemoryActions} from '../actions/memory';

const initialState: {
	loading: boolean,
} = {
	loading: false,
};

const reducer: Reducer = (state: State = initialState, action: Action) => {
	switch (action.type) {
		case MemoryActions.SET_LOADING:
			return {
				...state,
				loading: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
