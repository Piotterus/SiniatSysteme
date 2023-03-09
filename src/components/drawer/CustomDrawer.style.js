import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: colors.green,
  },
  scrollView: {
    // paddingHorizontal: '0%',
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  logoImage: {
    width: 150,
    height: '100%',
  },
  mainView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  headerView: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  xIcon: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
  borderView: {
    width: '80%',
    borderBottomColor: colors.flirt,
    borderBottomWidth: 1.5,
  },
  itemView: {
    paddingVertical: 30,
    width: '80%',
    // borderBottomColor: colors.flirt,
    // borderBottomWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImage: {
    marginBottom: 15,
  },
  fillerView: {
    flex: 1,
  },
  footerMenu: {
    color: colors.black,
    paddingBottom: 40,
    paddingTop: 20,
  },
});

export default styles;
