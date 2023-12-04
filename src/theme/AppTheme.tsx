import {StyleSheet, Dimensions, PixelRatio, Platform} from 'react-native';

export const ScreenSize = Dimensions.get('screen');
export const WindowSize = Dimensions.get('window');

export const normalize = (size: number) => {
  const scale =
    WindowSize.width < 450 ? WindowSize.width / 400 : WindowSize.width / 700;
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export const PokeStyles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  PokeBolaBG: {
    width: 300,
    height: 300,
    position: 'absolute',
    top: -100,
    right: -100,
    opacity: 0.4,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: normalize(50),
  },
  SubTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: normalize(20),
    marginTop: -13,
  },
  Shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.21,
    shadowRadius: 8.19,
    elevation: 11,
  },
});
