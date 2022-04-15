import React, { FC } from "react";
import { DefaultTheme, NavigationContainer, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import MainScreen from "../screens/Main";
import DetailsScreen, { DetailsScreenParams } from "../screens/Details";
import { Routes } from "./routes";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from "../screens/Settings";
import Icon from 'react-native-vector-icons/MaterialIcons';
import SitesScreen, { SitesScreenParams } from "../screens/Sites";

export type StackParamList = {
  [Routes.Main]: undefined;
  [Routes.Details]: DetailsScreenParams;
  [Routes.Home]: undefined,
  [Routes.Settings]: undefined,
  [Routes.Sites]: SitesScreenParams
}

export type MainNavigationProp<
  RouteName extends keyof StackParamList
  > = NativeStackScreenProps<StackParamList, RouteName>;

const Tab = createBottomTabNavigator<StackParamList>();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#3c67a6' } }}>
      <Tab.Screen
        name={Routes.Main}
        component={MainScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (<Icon name='home' size={28} color={focused ? '#F9AF1A' : 'white'} />)
        }}
      />
      <Tab.Screen
        name={Routes.Settings}
        component={SettingsScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (<Icon name='star' size={28} color={focused ? '#F9AF1A' : 'white'} />)
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator<StackParamList>();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#4C7EC7'
  }
};

const Navigator: FC = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName={Routes.Home} screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={Routes.Home}
          component={HomeTabs}
        />
        <Stack.Screen
          name={Routes.Sites}
          component={SitesScreen}
        />
        <Stack.Screen
          name={Routes.Details}
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;