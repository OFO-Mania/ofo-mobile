import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'

//Content
import HomeScreen from '../screens/appScreen/HomeScreen';
import DealsScreen from '../screens/appScreen/DealsScreen';
import ScanScreen from '../screens/appScreen/ScanScreen';
import FinanceScreen from '../screens/appScreen/FinanceScreen';
import ProfileScreen from '../screens/appScreen/ProfileScreen';

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home'
        }
    },
    Deals: {
        screen: DealsScreen,
        navigationOptions: {
            tabBarLabel: 'Deals',
        },
    },
    Scan: {
        screen: ScanScreen,
        navigationOptions: {
            tabBarLabel: '',
        }
    },
    Finance: {
        screen: FinanceScreen,
        navigationOptions: {
            tabBarLabel: 'Finance',
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: 'Profile',
        }
    },
},{
  //router config
    initialRouteName: 'Home',
    order: ['Home','Deals','Scan','Finance','Profile'],
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({focused}) => {
            const { routeName } = navigation.state;
            let sourceImage;

            if (routeName === 'Home') {
                sourceImage = focused ? require('../assets/images/imagesTabNav/IconHomeSelected.png') : require('../assets/images/imagesTabNav/IconHome.png');
            } else if (routeName === 'Deals') {
                sourceImage = focused ? require('../assets/images/imagesTabNav/IconDealsSelected.png') : require('../assets/images/imagesTabNav/IconDeals.png');
            } else if (routeName === 'Finance') {
                sourceImage = focused ? require('../assets/images/imagesTabNav/IconFinanceSelected.png') : require('../assets/images/imagesTabNav/IconFinance.png');
            } else if (routeName === 'Profile') {
                sourceImage = focused ? require('../assets/images/imagesTabNav/IconProfileSelected.png') : require('../assets/images/imagesTabNav/IconProfile.png');
            } else {
                sourceImage = require('../assets/images/imagesTabNav/IconBarcode.png')
            }

            if (routeName === 'Scan') {
                return <Image style={{width: 50, height: 50, marginBottom:20,borderWidth:3, borderColor:"white", borderRadius:25}}
                              source={sourceImage} />;
            } else {
                return <Image style={{width: 25, height: 25}} source={sourceImage} />;
            }
    },
    tabBarOptions: {
        activeTintColor: '#4D2A86',
        inactiveTintColor: 'grey',
        style: {
            height: 55,
            borderTopWidth: 0.2,
            paddingVertical: 5,
            shadowRadius: 10,
            shadowOpacity: 0.2,
        }
    },
  }),
})

const TabNavigation = createAppContainer(TabNavigator);
export default TabNavigation;
