import {Platform, StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {ScreenHeight, ScreenWidth} from '@rneui/base';

const styles = StyleSheet.create({
  mainView: {
    height: Platform.OS === 'ios' ? 40 : 50,
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonActive: {
    borderBottomWidth: 1.5,
    borderBottomColor: colors.flirt,
  },
  extra: {
    overView: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: ScreenWidth,
      height: ScreenHeight,
    },
    mainView: {
      position: 'absolute',
      backgroundColor: colors.whiteOpacity,
      borderTopLeftRadius: 20,
      bottom: 60,
      right: 0,
      width: '50%',
      alignItems: 'center',
    },
    item: {
      height: 45,
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingLeft: '10%',
      width: '100%',
      // backgroundColor: 'red',
    },
    text: {
      textAlign: 'left',
    },
    line: {
      borderBottomWidth: 1.5,
      borderColor: colors.cultured,
      width: '80%',
    },
  },
});

export default styles;
