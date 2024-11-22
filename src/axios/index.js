import Axios from 'axios';
import {
	BASE_URL,
	GROUP_ID,
	HEADER_AUTHORIZATION,
	HEADER_GROUP_ID,
	SESSION_TOKEN,
} from '../constants/common';
import { JWTStorage } from '../utils';

export const axios = Axios.create({
	baseURL: BASE_URL,
});

export const setCommonToken = (token) => {
	axios.defaults.headers.common[HEADER_AUTHORIZATION] = `Bearer ${token}`;
};

const XAuthToken = JWTStorage.getToken(SESSION_TOKEN);
axios.defaults.headers.common[HEADER_AUTHORIZATION] = `Bearer ${XAuthToken}`;
axios.defaults.headers.common[HEADER_GROUP_ID] = GROUP_ID;
