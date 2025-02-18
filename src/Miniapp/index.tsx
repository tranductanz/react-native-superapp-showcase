import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import {Federated} from '@callstack/repack/client';

const MiniApp = () => {
  const MiniAppNavigator = React.lazy(() =>
    Federated.importModule('CultureMWG', './CultureMWG'),
  );

  console.log(
    MiniAppNavigator,
    'MiniAppNavigatorMiniAppNavigatorMiniAppNavigator',
  );
  const FallbackComponent = () => (
    <View style={styles.container}>
      <ActivityIndicator color="rgba(56, 30, 114, 1)" size="large" />
    </View>
  );
  return (
    <React.Suspense fallback={<FallbackComponent />}>
      <MiniAppNavigator />
    </React.Suspense>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MiniApp;
