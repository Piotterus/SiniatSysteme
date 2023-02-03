import React, {useState} from 'react';
import CustomBackground from '../../components/backgrounds/CustomBackground';
import {Stage2Modal} from '../../components/modals/CustomModals';
import {Image, View} from 'react-native';
import styles from './StagesScreen.style';
import icons from '../../assets/icons';
import {MainMenuText, SmallText} from '../../components/texts/CustomText';
import StageNavigation from '../../components/stageNavigation/StageNavigation';
import {
  FilterSelect,
  FilterSelected,
} from '../../components/filters/CustomFilters';
import {PinkButton} from '../../components/buttons/CustomButton';
import {SystemHeader} from '../../components/headers/CustomHeaders';

const Stage3Screen = () => {
  const [stageModalVisible, setStageModalVisible] = useState(false);
  return (
    <CustomBackground header={'siniat'} showButton={true}>
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
        <FilterSelected label={'Feuerwiderstandsdauer [min]'} />
        <FilterSelected label={'Brandschutzrichtung'} />
        <SmallText>2. Scritt</SmallText>
        <FilterSelect
          label={'Feuerwiderstandsdauer [min]'}
          onPress={setStageModalVisible}
        />
        <FilterSelect
          label={'Brandschutzrichtung'}
          onPress={setStageModalVisible}
        />
        <FilterSelect
          label={'Feuerwiderstandsdauer [min]'}
          onPress={setStageModalVisible}
        />
        <FilterSelect
          label={'Brandschutzrichtung'}
          onPress={setStageModalVisible}
        />
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

export default Stage3Screen;
