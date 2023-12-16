/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { useEffect, useRef } from "react";
import { SimplePokemon } from "../interfaces/PokemonInterfaces";
import { TouchableOpacity } from "react-native-gesture-handler";
import { normalize, PokeStyles } from "../theme/AppTheme";
import { FadeInImage } from "./FadeInImage";
import { useState } from "react";
import ImageColors from "react-native-image-colors";

const WindowsWidth = Dimensions.get("window").width;
type Props = {
  pokemon: SimplePokemon;
};

const PokemonCard = ({ pokemon }: Props) => {
  const [BGcolor, setBGcolor] = useState("grey");
  const isMounted = useRef(true);

  const getBgColor = async () => {
    const result = await ImageColors.getColors(pokemon.picture, {
      fallback: "grey",
    });
    if (!isMounted.current) {
      return;
    }
    let color;
    switch (result.platform) {
      case "android":
        color = result.dominant;
        break;
      case "ios":
        color = result.background;
        break;
      default:
        color = "grey";
        break;
    }
    setBGcolor(color || "grey");
  };

  const getContrastColor = (hexColor: string) => {
    // Convertir el color hexadecimal a RGB
    const r = parseInt(hexColor.substring(1, 3), 16) / 255;
    const g = parseInt(hexColor.substring(3, 5), 16) / 255;
    const b = parseInt(hexColor.substring(5, 7), 16) / 255;

    // Calcular el brillo
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // Devolver "black" si el brillo es alto, "white" si no lo es
    return brightness > 0.6 ? "black" : "white";
  };

  useEffect(() => {
    getBgColor();
    return () => {
      isMounted.current = false;
    };
  }, []);
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View
        style={{
          ...Styles.cardContainer,
          width: WindowsWidth * 0.4,
          backgroundColor: BGcolor,
        }}
      >
        <View>
          <Text style={Styles.name}>
            {pokemon.name}
            {"\n#" + pokemon.id}
          </Text>
        </View>
        <View style={Styles.pokebolaBG}>
          <Image
            source={require("../asset/pokebola-blanca.png")}
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
    color: "white",
    fontSize: normalize(22),
    fontWeight: "bold",
    top: 20,
    left: 10,
  },
  pokebola: {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: -25,
    right: -25,
  },
  pokemonIMG: {
    width: 120,
    height: 120,
    position: "absolute",
    right: -7,
    bottom: -5,
  },
  pokebolaBG: {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 0,
    right: 0,
    opacity: 0.5,
    overflow: "hidden",
  },
});

export default PokemonCard;
