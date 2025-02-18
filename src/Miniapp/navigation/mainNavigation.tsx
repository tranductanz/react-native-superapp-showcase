import React from 'react';
import {StyleSheet} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import MiniApp from '../index';

export type MainStackParamList = {
  Home: undefined;
  Detail: undefined;
  MiniApp: undefined;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={
        {
          headerTitle: 'HostApp',
          headerBackTitleVisible: false,
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: 'rgba(255,255,255,1)',
        } as any
      }>
      <Main.Screen name="MiniApp" component={MiniApp} />
    </Main.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(56, 30, 114, 1)',
  },
  headerTitle: {
    color: 'rgba(255,255,255,1)',
  },
});

export default MainNavigator;
