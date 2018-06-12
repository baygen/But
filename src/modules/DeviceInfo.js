'use sctrict'
import DeviceInfo from 'react-native-device-info';
import { NetInfo } from 'react-native';

DeviceInfo.getCurrentInternetConnection = NetInfo.getConnectionInfo

let dev = {};

const getDeviceInfo = async () => {
  let s = Date.now();
  return Promise.all(
    Object.keys(DeviceInfo).map(key => {
      return Promise.resolve(DeviceInfo[key]()
      ).then(res => { dev[key.replace('get', '')] = res })
    })
  ).then(() => dev)
    .catch(console.error)
};

getDeviceInfo();

export const getCurrentDeviceInfo = getDeviceInfo;

export const CurrentDeviceInfo = dev;

export const DeviceInfoManager = DeviceInfo;
