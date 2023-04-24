import React from 'react';
import {SmallText} from '../texts/CustomText';
import {View} from 'react-native';
import styles from './Breadcrumps.style';
import useTranslation from '../../hooks/useTranslations';

const Breadcrumps = props => {
  const {t} = useTranslation();
  return (
    <View style={styles.breadcrumbsView}>
      <SmallText>{t(props.text1)} ></SmallText>
      <SmallText>{t(props.text2)}</SmallText>
    </View>
  );
};

export default Breadcrumps;
