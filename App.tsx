import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import PokedexNavigator from './src/navigator/PokedexNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <PokedexNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
};

export default App;
