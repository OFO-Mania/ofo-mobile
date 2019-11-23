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

import FetcherFactory, {ConfigSet} from './FetcherFactory';
import Fetcher from './Fetcher';

const fetcher = new Fetcher(new FetcherFactory(ConfigSet.AUTH_API));

export async function join(
  full_name: string,
  phone_number: string,
  email_address: string,
  referral_code?: string,
) {
  return fetcher.post('join', {full_name, phone_number, email_address, referral_code});
}

export async function sendPhoneVerification(phone_number: string) {
  return fetcher.post('phone_verification/send', {phone_number});
}

export async function verifyPhoneVerification(
  phone_number: string,
  verification_code: string,
) {
  return fetcher.post('phone_verification/verify', {
    phone_number,
    verification_code,
  });
}

export async function sendEmailVerification(email_address: string) {
  return fetcher.post('email_verification/send', {email_address});
}

export async function verifyEmailVerification(
	email_address: string,
	verification_code: string,
) {
	return fetcher.post('email_verification/verify', {
		email_address,
		verification_code,
	});
}

export async function setSecurityCode(
	one_time_token: string,
	security_code: string,
	device_id: string,
	device_type: 'ANDROID' | 'IOS'
) {
	return fetcher.post('set_security_code', {
		one_time_token,
		security_code,
		device_type,
		device_id
	});
}

export async function enterGate(
	token: string,
	security_code: string,
) {
	return fetcher.post('enter_gate', { security_code }, Fetcher.useAuthorisation({}, token));
}

export async function signIn(
	one_time_token: string,
	security_code: string,
	device_id: string,
	device_type: 'ANDROID' | 'IOS'
) {
	return fetcher.post('sign_in', {
		one_time_token,
		security_code,
		device_type,
		device_id
	});
}

export async function signOut(
	token: string,
	device_id: string,
	device_type: 'ANDROID' | 'IOS'
) {
	return fetcher.post('sign_out', { device_id, device_type }, Fetcher.useAuthorisation({}, token));
}
