import React, {useEffect, useState} from 'react';
import colors from '../../assets/colors';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import icons from '../../assets/icons';
import styles from './CustomFooter.style';
import {SmallText} from '../texts/CustomText';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ScreenHeight, ScreenWidth} from '@rneui/base';
// import {useNavigation, useRoute} from '@react-navigation/native';

const FooterItem = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.extra.item}
      onPress={() => {
        navigation.navigate(props.navigateTo);
        props.setOpen(false);
      }}>
      <SmallText style={styles.extra.text}>{props.text}</SmallText>
    </TouchableOpacity>
  );
};

const CustomFooter = props => {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.mainView}>
      <TouchableOpacity
        style={[
          styles.button,
          route.name === 'Home' ? styles.buttonActive : '',
        ]}
        onPress={() => navigation.navigate('Home')}>
        <Image source={icons.menu.home} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          // route.name !== 'Home' ? styles.buttonActive : '',
        ]}
        onPress={() => setOpen(prev => !prev)}>
        <Image source={icons.menu.more} />
      </TouchableOpacity>
      {open && (
        <TouchableOpacity
          onPress={() => setOpen(false)}
          style={styles.extra.overView}>
          <View style={styles.extra.mainView}>
            <FooterItem
              text={'Über Siniat Selektor'}
              navigateTo={'About'}
              setOpen={setOpen}
            />
            <View style={styles.extra.line} />
            <FooterItem
              text={'Loyalitätsprogramm'}
              navigateTo={'Pallas'}
              setOpen={setOpen}
            />
            <View style={styles.extra.line} />
            <FooterItem
              text={'Kontakt'}
              navigateTo={'Contact'}
              setOpen={setOpen}
            />
            <View style={styles.extra.line} />
            <FooterItem
              text={'Datenschutzbestimmungen'}
              navigateTo={'Privacy'}
              setOpen={setOpen}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomFooter;
