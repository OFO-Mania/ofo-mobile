/**
 * @flow
 * @format
 * */

import React, {Component, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

type Navigation = {
  screen: Component,
  icon: Component,
  iconSelected: Component,
  label: string,
};

type NavigationList = {
  [key: string]: Navigation,
};

type NavigationOptions = {
  oversizeNavigation: Navigation,
  initialRouteName: string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  navBottom: {
    flow: 1,
    flexDirection: 'column',
  },
	navBottomCenter: {
		flow: 1,
		flexDirection: 'column',
	},
});

const createBottomTabNavigator = (
  navigationList: NavigationList,
  navigationOptions: NavigationOptions,
) => () => {
  const [currentRoute, setCurrentRoute] = useState(
    `route/${navigationOptions.initialRouteName}`,
  );

  const onChangeRoute = (route: string) => {
    setCurrentRoute(route);
  };

  const getTouchableComponents = () => {
    const components = [];
    for (const key in navigationList) {
      if (navigationList.hasOwnProperty(key)) {
        const nav = navigationList[key];
        components.push(
          <TouchableOpacity key={key} style={styles.navBottom}>
            {nav.icon}
            {nav.label}
          </TouchableOpacity>,
        );
      }
    }
    return components;
  };

  const renderLeftButton = () => {
    const components = getTouchableComponents();
    return components.splice(
      Math.ceil(components.length / 2),
      Math.floor(components.length / 2),
    );
  };

  const renderRightButton = () => {
    const components = getTouchableComponents();
    return components.splice(0, Math.ceil(components.length / 2));
  };

  const renderMiddleButton = () => {
  	const nav = navigationOptions.oversizeNavigation;
  	return (
		<TouchableOpacity style={styles.navBottomCenter} onPress={() => onChangeRoute('oversize')}>
			{nav.icon}
			{nav.label}
		</TouchableOpacity>
	)
  };

  return (
    <View>
      {navigationList[currentRoute].screen}
      <View style={styles.container}>
		  {renderLeftButton()}
		  {renderMiddleButton()}
		  {renderRightButton()}
	  </View>
    </View>
  );
};
