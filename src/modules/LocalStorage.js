import { AsyncStorage } from 'react-native';

const STORAGE = {
  USER: 'user',
  GPS: 'gps',
  DEVICE: 'device',
  APP: 'app'
};

export const setUser = user => AsyncStorage.setItem(STORAGE.USER, JSON.stringify(user));

export const getUser = async () => JSON.parse((await AsyncStorage.getItem(STORAGE.USER)));
