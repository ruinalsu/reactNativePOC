import React, { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import SideMenu from "../components/common/SideMenu";
import Header from "../components/Header";
import { useSwipe } from "../hooks/swipe";
import TestModule from "../native_modules/testModule";
import { MainNavigationProp } from "../navigation/navigators";
import { Routes } from "../navigation/routes";
import { images } from "../utils/constants";

export type SettingsScreenParams = undefined;

const SettingsScreen: FC<MainNavigationProp<Routes.Settings>> = ({ navigation, route }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const { onTouchStart, onTouchEnd } = useSwipe(
    () => {
      console.log('swipe to left')
      setIsMenuVisible(false);
    },
    () => {
      console.log('swipre to right');
      setIsMenuVisible(true);
    }, 4);

  const onFocus = () => {
    console.log('focus');
  };

  const onBlur = () => {
    console.log('blur');
    setIsMenuVisible(false);
  };

  useEffect(() => {
    console.log('useEffect');
    navigation.addListener('focus', onFocus);
    navigation.addListener('blur', onBlur);
    return () => {
      console.log('unmount');
      navigation.removeListener('focus', onFocus);
      navigation.removeListener('blur', onBlur);
    }
  }, [navigation]);

  return (
    <SafeAreaProvider onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} style={styles.container}>
      <Header
        source={images.homeHeaderImage}
        title='Favorites'
      />
      <Text>{TestModule.getTestMessage()}</Text>
      <SideMenu isVisible={isMenuVisible} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
});

export default SettingsScreen;