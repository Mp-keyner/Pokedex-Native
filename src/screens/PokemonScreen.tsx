import {View, Text} from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackPokedex } from '../navigator/PokedexNavigator';

interface Props extends StackScreenProps<RootStackPokedex, "PokemonScreen"> {}
const PokemonScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>PokemonScreen</Text>
    </View>
  );
};

export default PokemonScreen;
