/**
 * @format
 * @flow
 */

import {useDispatch, useSelector} from 'react-redux';
import {setLoading} from '../actions/memory';

export const useLoading = (initialLoadingState = false) => {
	const loading = useSelector((state) => state.memory.loading);
	const dispatch = useDispatch();

	const showLoading = () => {
		dispatch(setLoading(true));
	};

	const hideLoading = () => {
		dispatch(setLoading(false));
	};

	return [loading, showLoading, hideLoading];
};
