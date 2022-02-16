import axios from 'axios';

export const ENDPOINT = {
  user: 'user',
  product: 'product',
};

export const API_USER_HOST = axios.create({
  baseURL: `http://api.bungadavi.brits-team.com:8080/api/v1/${ENDPOINT.user}`,
  timeout: 5000,
});

export const API_PRODUCT_HOST = axios.create({
  baseURL: `http://api.bungadavi.brits-team.com:8080/api/v1/${ENDPOINT.product}`,
  timeout: 5000,
});
