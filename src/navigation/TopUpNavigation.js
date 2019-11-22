import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from "react-navigation-stack";  

import TopUpScreen from '../screens/appScreen/TopUpScreen';
import TopUpAnotherScreen from '../screens/appScreen/TopUpAnotherScreen';

const TopUpNav = createMaterialTopTabNavigator(
    {
        TopUpScreen: { 
            screen: TopUpScreen,
            navigationOptions: {
                tabBarLabel: 'Instant Top Up',
            }
        },
        TopUpAnotherScreen: { 
            screen: TopUpAnotherScreen, 
            navigationOptions: {
                tabBarLabel: 'Other Method',
            }
        },
    },
    {
      tabBarPosition: 'top',
      swipeEnabled: true,
      animationEnabled: true,
      tabBarOptions: {
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#4D2A86',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#00AFF0',
          borderBottomWidth: 2,
  
        },
        // headerMode: 'none',
      },
    }
  );

  const TopUpNavigation = createStackNavigator({
    TopUpNav: {
      screen: TopUpNav,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#4D2A86',
        },
        headerTintColor: '#FFFFFF',
        title: 'Top Up',
        headerTitleContainerStyle:{
            marginHorizontal:10,
            justifyContent: Platform.OS === "ios" ? "center" : "flex-start"
        }
      },
    },
  });
  
  
  export default createAppContainer(TopUpNavigation);