import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  pinkButtton: {
    mainView: {
      backgroundColor: colors.wenge,
      width: '90%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: colors.white,
      fontSize: 13,
    },
  },
  mainMenuButton: {
    mainView: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    text: {
      position: 'absolute',
      bottom: 10,
      width: '80%',
      textAlign: 'center',
    },
  },
  whiteButton: {
    mainView: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 70,
      borderColor: colors.grey,
      borderWidth: 0.5,
      marginTop: 15,
      paddingHorizontal: 15,
    },
    text: {
      position: 'absolute',
      bottom: 5,
      width: '60%',
      textAlign: 'center',
    },
  },
  systemKarteButton: {
    mainView: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      // height: 40,
      borderColor: colors.violet,
      borderWidth: 1.5,
      // marginTop: 15,
      padding: 5,
      borderRadius: 5,
      backgroundColor: colors.white,
    },
    text: {
      color: colors.violet,
    },
  },
  productBrochureButton: {
    mainView: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      // height: 40,
      borderColor: colors.violet,
      borderWidth: 1.5,
      marginVertical: 10,
      padding: 5,
      // borderRadius: 5,
      backgroundColor: colors.white,
    },
    text: {
      color: colors.violet,
    },
  },
  sendButton: {
    mainView: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      backgroundColor: colors.wenge,
    },
    text: {
      color: colors.white,
      fontSize: 14,
    },
  },
});

export default styles;
