import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';

export type RootStackPokedex = {
  HomeScreen: any;
  PokemonScreen: any;
};

const Pokemon = createStackNavigator<RootStackPokedex>();

function PokedexNavigator() {
  return (
    <Pokemon.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Pokemon.Screen name="HomeScreen" component={HomeScreen} />
      <Pokemon.Screen name="PokemonScreen" component={PokemonScreen} />
    </Pokemon.Navigator>
  );
}

export default PokedexNavigator;
