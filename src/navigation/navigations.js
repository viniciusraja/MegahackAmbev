import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import HomeScreen from 'screens/HomeScreen';
import ProducItemDescription from 'screens/ProductItemDescriptionScreen'
import CartScreen from 'screens/CartScreen'
import Header from 'components/container/Header'
import { SharedElement } from 'react-native-shared-element';

const AppNavigator = createSharedElementStackNavigator(
  {
  Home: {
    screen: HomeScreen,
        defaultNavigationOptions:{
      cardStyleInterpolator:({current:{progress}})=>{
        return {
          cardStyle:{opacity:progress,
                    color:progress,
                    backgroundColor:progress}
        }
      },
      cardStyle:{
        backgroundColor:"transparent"
      }
    },
    navigationOptions: {
      header:(()=><Header/>),
    },
            
  },
  
  ProducItemDescription:{
    screen: ProducItemDescription,
    defaultNavigationOptions:{
      cardStyleInterpolator:({current:{progress}})=>{
        return {
          cardStyle:{opacity:progress,
            color:progress,
            backgroundColor:progress}
          }
      },
        cardStyle:{
          backgroundColor:"transparent",
          
        }
      },
      navigationOptions: {
      
        header:(()=><Header/>)
    },
  },
  CartScreen:{
    screen: CartScreen,
    

    defaultNavigationOptions:{
      
      cardStyleInterpolator:({current:{progress}})=>{
        return {
          cardStyle:{opacity:progress,
            color:progress,
            backgroundColor:progress}
          }
        },
        cardStyle:{
          backgroundColor:"transparent"
        },
        
        
      },
      navigationOptions: {
        
        header:(()=><Header/>),
        
      },
    },
  },
    {
      headerMode: 'float'
    },
  
  );
  const Router = createAppContainer(AppNavigator);
  
export default Router;
