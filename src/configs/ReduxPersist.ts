import immutablePersistenceTransform from '../services/ImmutablePersistenceTransform';
import AsyncStorage from '@react-native-community/async-storage';

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    // 非持久化
    blacklist: [],
    // 持久化
    whitelist: ['user'],
    transforms: [immutablePersistenceTransform],
  },
};

export default REDUX_PERSIST;
