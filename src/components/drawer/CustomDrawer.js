import React, {useContext, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Linking, ScrollView, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AuthContext from '../../contexts/AuthContext';
import UserContext from '../../contexts/UserContext';
import styles from './CustomDrawer.style';
import icons from '../../assets/icons';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors';
import {BoldText, SmallText} from '../texts/CustomText';
import useTranslation from '../../hooks/useTranslations';

const CustomDrawer = props => {
  const {rulesFile} = useContext(UserContext);
  const [menuItems, setMenuItems] = useState([
    {
      name: 'About',
      label: 'menu.about',
      onPressType: 'navigate',
    },
    {
      name: 'Pallas',
      label: 'menu.loyalty',
      onPressType: 'navigate',
    },
    {
      name: 'Contact',
      label: 'menu.contact',
      onPressType: 'navigate',
    },
    {
      name: 'Privacy',
      label: 'Datenschutzbestimmungen',
      onPressType: 'navigate',
    },
  ]);
  const navigation = useNavigation();
  const {logout} = useContext(AuthContext);
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.headerView}>
          <Feather
            name={'x'}
            color={colors.flirt}
            size={30}
            style={styles.xIcon}
            onPress={() => props.navigation.closeDrawer()}
          />
        </View>
        {menuItems.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <TouchableOpacity
                onPress={() =>
                  item.onPressType === 'navigate'
                    ? navigation.navigate(item.name)
                    : Linking.openURL(rulesFile)
                }
                style={styles.itemView}
                key={index}>
                <SmallText style={{fontSize: 14}}>{t(item.label)}</SmallText>
              </TouchableOpacity>
              <View style={styles.borderView} />
            </React.Fragment>
          );
        })}
        <View style={styles.fillerView} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomDrawer;
