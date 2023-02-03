import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {ScreenHeight, ScreenWidth} from '@rneui/base';

const styles = StyleSheet.create({
  fullModal: {
    mainView: {
      flex: 1,
      width: ScreenWidth,
      height: ScreenHeight,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.white,
      borderColor: colors.dacher,
      borderWidth: 1,
      // paddingHorizontal: 20,
      overflow: 'hidden',
    },
  },
  stage1Modal: {
    headerView: {
      backgroundColor: colors.decken,
      width: '100%',
      height: 80,
      paddingLeft: 60,
      justifyContent: 'center',
    },
    headerText: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      marginBottom: 5,
    },
    arrow: {
      padding: 20,
      position: 'absolute',
      top: 0,
      left: 0,
    },
    optionButton: {
      width: '100%',
      paddingLeft: 60,
      height: 60,
      borderBottomColor: colors.cultured,
      borderBottomWidth: 1,
      borderBottomLeftRadius: 60,
      justifyContent: 'center',
    },
    checkImage: {
      padding: 20,
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
  stage2Modal: {
    headerView: {
      backgroundColor: colors.decken,
      width: '100%',
      height: 80,
      paddingLeft: 60,
      justifyContent: 'center',
    },
    headerText: {
      fontWeight: 'bold',
      marginTop: 5,
    },
    arrow: {
      padding: 20,
      position: 'absolute',
      top: 0,
      left: 0,
    },
    optionButton: {
      width: '100%',
      paddingLeft: 60,
      height: 60,
      borderBottomColor: colors.cultured,
      borderBottomWidth: 1,
      borderBottomLeftRadius: 60,
      justifyContent: 'center',
    },
    checkImage: {
      padding: 20,
      position: 'absolute',
      top: 0,
      left: 0,
    },
    backText: {
      color: colors.wenge,
      padding: 10,
    },
  },
});

export default styles;
