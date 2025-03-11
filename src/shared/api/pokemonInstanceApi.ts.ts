import axios from 'axios';
//constants
import { jsonBaseURL } from '../libs/constants/jsonBaseURL';

export const pokemonInstanceApi = axios.create({
  baseURL: jsonBaseURL
});
