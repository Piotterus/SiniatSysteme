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
      height: 40,
      width: 40,
      borderRadius: 20,
      backgroundColor: colors.grey,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 5,
    },
    text: {
      color: colors.white,
      fontSize: 22,
      fontWeight: 'bold',
    },
  },
});

export default styles;
