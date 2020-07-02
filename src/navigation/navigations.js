import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import HomeScreen from 'screens/HomeScreen';
import ProducItemDescription from 'screens/ProductItemDescriptionScreen';
import Header from 'components/container/Header';
import { SharedElement } from 'react-native-shared-element';
import QrCodeScannerScreen from 'screens/QrCodeScannerScreen';
import UserPoints from 'screens/UserPoints';
import EventsMap from 'screens/EventsMap'
const AppNavigator = createSharedElementStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      defaultNavigationOptions: {
        cardStyleInterpolator: ({ current: { progress } }) => {
          return {
            cardStyle: {
              opacity: progress,
              color: progress,
              backgroundColor: progress,
            },
          };
        },
        cardStyle: {
          backgroundColor: 'transparent',
        },
      },
      navigationOptions: {
        header: () => <Header />,
      },
    },

    ProducItemDescription: {
      screen: ProducItemDescription,
      defaultNavigationOptions: {
        cardStyleInterpolator: ({ current: { progress } }) => {
          return {
            cardStyle: {
              opacity: progress,
              color: progress,
              backgroundColor: progress,
            },
          };
        },
        cardStyle: {
          backgroundColor: 'transparent',
        },
      },
      navigationOptions: {
        header: () => <Header />,
      },
    },
    EventsMap: {
      screen: EventsMap,
      navigationOptions: {
        headerShown:false
      },
    },
    QrCodeScannerScreen: {
      screen: QrCodeScannerScreen,
      navigationOptions: {
        header: () => <Header />,
      },
    },
    UserPoints: {
      screen: UserPoints,
      navigationOptions: {
        header: () => <Header />,
      },
    },
  }
);

const Router = createAppContainer(AppNavigator);

export default Router;
