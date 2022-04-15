import React, { FC } from "react";
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';

const FullscreenLoading: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loading}>
        <ActivityIndicator size='large' />
        <Text style={styles.loadingText}>Please wait...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'background: rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loading: {
    width: 250,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center'
  },
  loadingText: {
    fontSize: 18,
    color: 'darkgrey',
    alignSelf: 'center',
    marginTop: 10
  }
});

export default FullscreenLoading;