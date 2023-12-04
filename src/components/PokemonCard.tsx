import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {useEffect} from 'react';
import {SimplePokemon} from '../interfaces/PokemonInterfaces';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {normalize, PokeStyles} from '../theme/AppTheme';
import {FadeInImage} from './FadeInImage';
import {useState} from 'react';
import {getColors} from 'react-native-image-colors';

const WindowsWidth = Dimensions.get('window').width;
type Props = {
  pokemon: SimplePokemon;
};

const PokemonCard = ({pokemon}: Props) => {
  const [BGcolor, setBGcolor] = useState('grey');

  useEffect(() => {
    getColors(pokemon.picture, {
      fallback: 'grey',
    }).then(colors => setBGcolor(colors.dominant || 'grey'));
  }, []);

  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View
        style={{
          ...Styles.cardContainer,
          width: WindowsWidth * 0.4,
          backgroundColor: BGcolor,
        }}>
        <View>
          <Text style={Styles.name}>
            {pokemon.name}
            {'\n#' + pokemon.id}
          </Text>
        </View>
        <View style={Styles.pokebolaBG}>
          <Image
            source={require('../asset/pokebola-blanca.png')}
            style={Styles.pokebola}
          />
        </View>
        <FadeInImage uri={pokemon.picture} style={Styles.pokemonIMG} />
      </View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  cardContainer: {
    ...PokeStyles.Shadow,
    marginHorizontal: 10,
    height: 120,
    width: 150,
    marginBottom: 25,
    borderRadius: 10,
  },
  name: {
    color: 'white',
    fontSize: normalize(22),
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -25,
    right: -25,
  },
  pokemonIMG: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -7,
    bottom: -5,
  },
  pokebolaBG: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    opacity: 0.5,
    overflow: 'hidden',
  },
});

export default PokemonCard;
