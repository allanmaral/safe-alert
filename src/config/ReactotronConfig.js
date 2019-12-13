import Reactotron, { overlay } from 'reactotron-react-native';
import { AsyncStorage } from 'react-native';

Reactotron.setAsyncStorageHandler(AsyncStorage);
Reactotron.configure({
  name: 'Safe Alert',
  host: '192.168.1.10',
});
Reactotron.useReactNative({ asyncStorage: { ignore: ['secret'] } });
Reactotron.use(overlay());
Reactotron.connect();
Reactotron.clear();

console.tron = Reactotron;
