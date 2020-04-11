/* eslint-disable */

import { NFCPlugin } from '../../plugins/nfc/server';
import { GoogleOAuth } from '../../plugins/google-oauth';
import processOAuthCallback from './auth/processOAuthCallback';

// import Google OAuth requirements
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;
const GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL as string;

export const server = [new NFCPlugin()];
export const auth = [
	new GoogleOAuth({
		settings: {
			GOOGLE_CLIENT_ID,
			GOOGLE_CLIENT_SECRET,
			GOOGLE_CALLBACK_URL,
			processOAuthCallback,
		},
	}),
];

// export default { server, auth };
