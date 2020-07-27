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

export async function getTransactionHistory(token: string) {
	return fetcher.get('transaction/history', Fetcher.useAuthorisation({}, token));
}

export async function inquiryTransferToUser(token: string, phone_number: string) {
	return fetcher.post('transaction/transfer/user/inquiry', { phone_number }, Fetcher.useAuthorisation({}, token));
}

export async function confirmTransferToUser(
	token: string,
	phone_number: string,
	amount: string,
	note?: string
) {
	return fetcher.post('transaction/transfer/user/confirm', {
		phone_number, amount, note
	}, Fetcher.useAuthorisation({}, token));
}

export async function inquiryTransferToBank(
	token: string,
	account_number: string
) {
	return fetcher.post('transaction/transfer/bank/inquiry', {
		bank: 'BANK BCA',
		account_number,
	}, Fetcher.useAuthorisation({}, token));
}

export async function confirmTransferToBank(
	token: string,
	bank_account_id: string,
	amount: string,
	note?: string
) {
	return fetcher.post('transaction/transfer/bank/confirm', {
		bank_account_id, amount, note
	}, Fetcher.useAuthorisation({}, token));
}

export async function instantTopup(token: string, amount: string) {
	return fetcher.post('transaction/topup/instant', {amount}, Fetcher.useAuthorisation({}, token));
}


export async function inquiryPlnPrepaidPayment(
	token: string,
	meter_number: string,
) {
	return fetcher.post('transaction/payment/pln/prepaid/inquiry', {
		meter_number
	}, Fetcher.useAuthorisation({}, token));
}

export async function confirmPlnPrepaidPayment(
	token: string,
	meter_number: string,
	amount: string,
	wallet_type: 'CASH' | 'POINT'
) {
	return fetcher.post('transaction/payment/pln/prepaid/confirm', {
		meter_number, amount, wallet_type
	}, Fetcher.useAuthorisation({}, token));
}

export async function inquiryPlnPostpaidPayment(token: string, customer_id: string) {
	return fetcher.post('transaction/payment/pln/postpaid/inquiry', {
		customer_id
	}, Fetcher.useAuthorisation({}, token));
}

export async function confirmPlnPostpaidPayment(
	token: string,
	customer_id: string,
	wallet_type: 'CASH' | 'POINT'
) {
	return fetcher.post('transaction/payment/pln/postpaid/confirm', {
		customer_id, wallet_type
	}, Fetcher.useAuthorisation({}, token));
}
