/**
 * @format
 */

import App from './App';
import {name as appName} from './app.json';

import {AppRegistry, Platform} from 'react-native';
import {ScriptManager, Federated} from '@callstack/repack/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

ScriptManager.shared.setStorage(AsyncStorage);

const resolveURL = Federated.createURLResolver({
  containers: {DeviceControl: 'http://localhost:9000/[name][ext]'},
});

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  return {
    url: resolveURL(scriptId, caller),
    query: {platform: Platform.OS},
    cache: process.env.MF_CACHE,
  };
});

AppRegistry.registerComponent(appName, () => App);
