import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  mainView: {
    height: 80,
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
    mainView: {
      position: 'absolute',
      backgroundColor: colors.whiteOpacity,
      borderTopLeftRadius: 20,
      bottom: 80,
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
