import axios from 'axios';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = 'https://demo7478931.mockable.io/';

export function getRequest(URL: string) {
  return axiosClient
    .get(`/${URL}`)
    .then((response) => response)
    .catch((error) => error.response);
}

export function postRequest(URL: string, data: any) {
  return axiosClient
    .post(`/${URL}`, ...data)
    .then((response) => response)
    .catch((error) => error.response);
}
