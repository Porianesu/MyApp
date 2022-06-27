//路由组件
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import routeConfig from '@/config/route';
import {RootStackParamList} from '@/types/navigation';
const Stack = createStackNavigator<RootStackParamList>();

function NavigationComponent({initPath, initParams}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initPath || 'Index'}
        // 过度效果使用横向滑动
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        {routeConfig.map(item => {
          return (
            <Stack.Screen
              initialParams={
                (initPath === item.name || item.name === 'Index') && initParams
                  ? JSON.parse(initParams)
                  : {}
              }
              key={item.name}
              component={item.component}
              name={item.name}
              options={item.options}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationComponent;
