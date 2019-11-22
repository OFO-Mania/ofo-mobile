import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from "react-navigation-stack";  

import TransferNew from '../screens/appScreen/TransferNewScreen';
import TransferFavorit from '../screens/appScreen/TransferFavoritScreen';

const TransferNav = createMaterialTopTabNavigator(
    {
        TransferNew: { 
            screen: TransferNew,
            navigationOptions: {
                tabBarLabel: 'New',
            }
        },
        TransferFavorit: { 
            screen: TransferFavorit, 
            navigationOptions: {
                tabBarLabel: 'Favourite',
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
      },
    }
  );

  const TransferNavigation = createStackNavigator({
    TransferNav: {
      screen: TransferNav,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#4D2A86',
        },
        headerTintColor: '#FFFFFF',
        title: 'Transfer',
        headerTitleContainerStyle:{
            marginHorizontal:10,
            justifyContent: Platform.OS === "ios" ? "center" : "flex-start"
        }
      },
    },
  });
  
  
  export default createAppContainer(TransferNavigation);