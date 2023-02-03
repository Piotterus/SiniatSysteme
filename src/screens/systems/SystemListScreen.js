import React from 'react';
import CustomBackground from '../../components/backgrounds/CustomBackground';
import {SystemHeader} from '../../components/headers/CustomHeaders';
import {Image, TextInput, View} from 'react-native';
import {
  BoldText,
  PinkHeaderText,
  SmallText,
} from '../../components/texts/CustomText';
import icons from '../../assets/icons';
import styles from './SystemListScreen.style';

const SystemListScreen = () => {
  return (
    <CustomBackground header={'siniat'}>
      <SystemHeader />
      <View style={styles.rowView}>
        <SmallText>Twoje filtry</SmallText>
        <Image source={icons.filter} />
      </View>
      <View style={styles.rowView}>
        <SmallText>Es wurden</SmallText>
        <SmallText>2 Systemvarianten gefunden</SmallText>
      </View>
      <View style={styles.rowView}>
        <TextInput style={styles.textInput} placeholder={'Suchen'} />
      </View>
      <View>
        <View>
          <BoldText>SD51 - CD-N/82/GKF - DF/MW</BoldText>
        </View>
      </View>
    </CustomBackground>
  );
};

export default SystemListScreen;
