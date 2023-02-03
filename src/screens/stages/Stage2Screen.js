import React, {useState} from 'react';
import CustomBackground from '../../components/backgrounds/CustomBackground';
import {Stage1Modal, Stage2Modal} from '../../components/modals/CustomModals';
import {Image, View} from 'react-native';
import styles from './StagesScreen.style';
import icons from '../../assets/icons';
import {MainMenuText, SmallText} from '../../components/texts/CustomText';
import StageNavigation from '../../components/stageNavigation/StageNavigation';
import {WhiteButton} from '../../components/buttons/CustomButton';
import {FilterSelect} from '../../components/filters/CustomFilters';
import {SystemHeader} from '../../components/headers/CustomHeaders';

const Stage2Screen = () => {
  const [stageModalVisible, setStageModalVisible] = useState(false);
  return (
    <CustomBackground header={'siniat'}>
      <Stage2Modal
        visible={stageModalVisible}
        setVisible={setStageModalVisible}
      />
      <SystemHeader />
      <StageNavigation />
      <View style={styles.stage2.breadcrumbsView}>
        <SmallText>Unterdecken und Deckenbekleidungen ></SmallText>
        <SmallText>Standard, Nassraum, Strahlenschutz</SmallText>
      </View>
      <View style={styles.stage2.filterView}>
        <SmallText>1. Scritt</SmallText>
        <FilterSelect
          label={'Feuerwiderstandsdauer [min]'}
          onPress={setStageModalVisible}
        />
        <FilterSelect
          label={'Brandschutzrichtung'}
          onPress={setStageModalVisible}
        />
      </View>
    </CustomBackground>
  );
};

export default Stage2Screen;
