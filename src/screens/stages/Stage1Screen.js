import React, {useState} from 'react';
import CustomBackground from '../../components/backgrounds/CustomBackground';
import {Image, Text, View} from 'react-native';
import icons from '../../assets/icons';
import StageNavigation from '../../components/stageNavigation/StageNavigation';
import {MainMenuText, SmallText} from '../../components/texts/CustomText';
import styles from './StagesScreen.style';
import {WhiteButton} from '../../components/buttons/CustomButton';
import {FullModal, Stage1Modal} from '../../components/modals/CustomModals';
import {SystemHeader} from '../../components/headers/CustomHeaders';

const Stage1Screen = () => {
  const [stageModalVisible, setStageModalVisible] = useState(false);
  return (
    <CustomBackground header={'siniat'}>
      <Stage1Modal
        visible={stageModalVisible}
        setVisible={setStageModalVisible}
      />
      <SystemHeader />
      <StageNavigation />
      <WhiteButton
        text={'Freicośtam'}
        onPress={() => setStageModalVisible(true)}
      />
      <WhiteButton
        text={'Freicośtam'}
        onPress={() => setStageModalVisible(true)}
      />
      <WhiteButton
        text={'Freicośtam'}
        onPress={() => setStageModalVisible(true)}
      />
      <WhiteButton
        text={'Freicośtam'}
        onPress={() => setStageModalVisible(true)}
      />
      <WhiteButton
        text={'Freicośtam'}
        onPress={() => setStageModalVisible(true)}
      />
    </CustomBackground>
  );
};

export default Stage1Screen;
