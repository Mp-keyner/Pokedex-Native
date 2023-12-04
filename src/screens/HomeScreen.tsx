import {View, Text, Image, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackPokedex} from '../navigator/PokedexNavigator';
import {PokeStyles} from '../theme/AppTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPages} from '../hook/usePokemonPages';
import {FadeInImage} from '../components/FadeInImage';
import PokemonCard from '../components/PokemonCard';

interface Props extends StackScreenProps<RootStackPokedex, 'HomeScreen'> {}
const HomeScreen = ({navigation}: Props) => {
  const {top} = useSafeAreaInsets();
  const {pokemonList, loadPokemons} = usePokemonPages();

  return (
    <>
      <Image
        source={require('../asset/pokebola.png')}
        style={PokeStyles.PokeBolaBG}
      />
      <View
        style={{alignItems: 'center'}}>
        <FlatList
          data={pokemonList}
          keyExtractor={poke => poke.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          ListHeaderComponent={
            <View style={{marginVertical: top + 30, ...PokeStyles.globalMargin}}>
              <Text style={PokeStyles.title}>Pokedex</Text>
              <Text style={PokeStyles.SubTitle}>By: keyner De la  Hoz</Text>
            </View>
          }
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator
              size={40}
              color={'grey'}
              style={{height: 200, borderColor: 'red', borderWidth: 1}}
            />
          }
        />
      </View>
    </>
  );
};

export default HomeScreen;
