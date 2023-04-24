import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {ScreenWidth} from '@rneui/base';

const styles = StyleSheet.create({
  mainView: {
    height: 70,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    width: ScreenWidth,
  },
  backArrow: {
    position: 'absolute',
    left: 10,
    padding: 10,
  },
  systemHeader: {
    width: ScreenWidth,
    alignItems: 'center',
  },
  systemText: {
    position: 'absolute',
    bottom: 10,
    width: '80%',
    textAlign: 'center',
  },
  languageButton: {
    backgroundColor: colors.wenge,
    height: 30,
    width: 30,
    borderRadius: 15,
    position: 'absolute',
    // top: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageText: {
    textTransform: 'uppercase',
  },
  languageView: {
    animated: {
      width: '100%',
      alignItems: 'center',
      position: 'absolute',
      top: 70,
      backgroundColor: colors.white,
      zIndex: 1000,
      overflow: 'hidden',
    },
    scrollView: {
      width: '100%',
      borderTopWidth: 1,
      borderTopColor: colors.grey,
    },
    containerScrollView: {
      alignItems: 'center',
      justifyContent: 'space-between',
      flexGrow: 1,
    },
    languageList: {
      alignItems: 'center',
      width: '100%',
    },
    closeButton: {
      padding: 20,
    },
    languageText: {
      padding: 20,
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
    activeText: {
      fontWeight: 'bold',
      color: colors.wenge,
    },
    languageItem: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    checkImage: {
      position: 'absolute',
      left: 60,
    },
  },
});

export default styles;
