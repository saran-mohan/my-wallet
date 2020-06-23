import { FETCH_BITCOIN } from './types';
import axios from 'axios';

export const fetchBitcoin = () => {
  const response = axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
  return {
    type: FETCH_BITCOIN,
    payload: response,
  };
};