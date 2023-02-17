import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    paddingVertical: 10,
    borderBottomColor: colors.grey,
    borderBottomWidth: 0.5,
  },
  circle: {
    mainView: {
      height: 30,
      width: 30,
      borderRadius: 20,
      backgroundColor: colors.grey,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 5,
    },
    inactive: {
      backgroundColor: colors.greyOpacity,
    },
    text: {
      color: colors.white,
      fontSize: 22,
      fontWeight: 'bold',
    },
  },
  ring: {
    mainView: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    animatedRing: {
      width: 30,
      height: 30,
      borderRadius: 20,
      borderWidth: 0.5,
      borderColor: colors.wenge,
      zIndex: -1,
    },
  },
});

export default styles;
