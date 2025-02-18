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
  containers: {CultureMWG: 'http://localhost:9000/ios/[name][ext]'},
});

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  return {
    url: resolveURL(scriptId, caller),
    query: {platform: Platform.OS},
    cache: false,
  };
});
ScriptManager.shared.on('resolving', (...args) => {
  console.log('DEBUG/resolving', ...args);
});

ScriptManager.shared.on('resolved', (...args) => {
  console.log('DEBUG/resolved', ...args);
});

ScriptManager.shared.on('prefetching', (...args) => {
  console.log('DEBUG/prefetching', ...args);
});

ScriptManager.shared.on('loading', (...args) => {
  console.log('DEBUG/loading', ...args);
});

ScriptManager.shared.on('loaded', (...args) => {
  console.log('DEBUG/loaded', ...args);
});

ScriptManager.shared.on('error', (...args) => {
  console.log('DEBUG/error', ...args);
});

AppRegistry.registerComponent(appName, () => App);
