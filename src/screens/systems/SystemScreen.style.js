import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {ScreenWidth} from '@rneui/base';

const styles = StyleSheet.create({
  systemListScreen: {
    rowView: {
      flexDirection: 'row',
      backgroundColor: colors.white,
      justifyContent: 'space-between',
      alignItems: 'center',
      width: ScreenWidth,
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    textInput: {
      borderWidth: 2,
      borderColor: colors.cultured,
      width: '100%',
      paddingVertical: 10,
    },
    systemList: {
      width: '100%',
    },
    systemListContainter: {
      alignItems: 'center',
    },
    systemItem: {
      width: '95%',
      marginBottom: 20,
      alignItems: 'center',
    },
    systemItemTitleRow: {
      flexDirection: 'row',
      width: ScreenWidth * 0.8,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 0.25,
      borderBottomColor: colors.grey,
      paddingVertical: 5,
    },
    systemItemDataRow: {
      flexDirection: 'row',
      width: ScreenWidth * 0.8,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 0.25,
      borderBottomColor: colors.grey,
      borderBottomLeftRadius: 20,
      paddingLeft: 20,
      paddingVertical: 5,
    },
    systemItemDataIcon: {
      position: 'absolute',
      left: 5,
    },
    systemItemPlus: {
      padding: 10,
    },
  },
  systemItemScreen: {
    systemItem: {
      mainView: {
        width: '100%',
      },
      title: {
        fontSize: 20,
        marginTop: 20,
      },
      descriptionRow: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 20,
      },
      desciptionRowItem: {
        flex: 1,
      },
      systemKarteButton: {
        width: '100%',
      },
      systemItem: {
        width: '95%',
        marginBottom: 20,
        alignItems: 'center',
      },
      systemItemTitleRow: {
        flexDirection: 'row',
        width: ScreenWidth * 0.8,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.25,
        borderBottomColor: colors.grey,
        paddingVertical: 5,
        marginTop: 20,
      },
      systemItemDataRow: {
        flexDirection: 'row',
        width: ScreenWidth * 0.8,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.25,
        borderBottomColor: colors.grey,
        borderBottomLeftRadius: 20,
        paddingLeft: 20,
        paddingVertical: 5,
      },
      systemItemDataIcon: {
        position: 'absolute',
        left: 5,
      },
      violetText: {
        color: colors.violet,
      },
    },
  },
});

export default styles;
