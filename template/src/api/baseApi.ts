import axios from 'axios'
import pkg from '../../package.json'

export const _BASE_URL = process.env.NODE_ENV === 'development' ? `${pkg["proxy"]}/api` : '/api';

export const AXIOS = axios.create({
    baseURL: _BASE_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
    transformRequest: [(data, headers) => {
        if (headers) {
            // if (localStorage.getItem(ACCESS_TOKEN)) {
            //   headers.Authorization = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN);
            // }
            if (headers['Content-Type'] !== 'application/json') {
                return data;
            }
        }
        return JSON.stringify(data);
    }]
})