import ReduxPersist from '../configs/ReduxPersist';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore } from 'redux-persist';

const updateReducers = async (store: any) => {
  const reducerVersion = ReduxPersist.reducerVersion;
  try {
    const localVersion = await AsyncStorage.getItem('reducerVersion');
    if (localVersion !== reducerVersion) {
      console.log('Old Version:', localVersion);
      console.log('New Version:', reducerVersion);
      // Purge store
      persistStore(store, null, () => console.log('更新 store')).purge();
      AsyncStorage.setItem('reducerVersion', reducerVersion);
    } else {
      persistStore(store, null, () => console.log('不需要更新 store'));
    }
  } catch (error) {
    persistStore(store, null, () => console.log('更新 store'));
    AsyncStorage.setItem('reducerVersion', reducerVersion);
  }
};

export default { updateReducers };
