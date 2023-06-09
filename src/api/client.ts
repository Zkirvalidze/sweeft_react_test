import axios from 'axios';
import {
  IGetUsersResponse, IUserDetails,
} from '../types/types';

const client = axios.create({
  baseURL: 'http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com',
  headers: {
    Accept: 'application/json',
  },
});

export const fetchUsers = async (
  page: number,
  size: number
): Promise<IGetUsersResponse> => {
  try {
    const res = await client.get(`user/${page}/${size}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const fetchFriends = async (
  page: number,
  size: number,
  userId: number
): Promise<IGetUsersResponse> => {
  try {
    const res = await client.get(`user/${userId}/friends/${page}/${size}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const fetchUser = async (userId: number): Promise<IUserDetails> => {
  try {
    const res = await client.get(`user/${userId}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};
