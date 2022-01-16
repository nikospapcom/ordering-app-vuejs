import axios from 'axios';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = 'http://demo7478931.mockable.io/';

export function getRequest(URL: string) {
  return axiosClient
    .get(`/${URL}`)
    .then((response) => response)
    .catch((error) => error.response);
}
