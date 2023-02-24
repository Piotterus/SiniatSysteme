import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PinkHeaderText} from '../../components/texts/CustomText';
import {Image, Linking, View} from 'react-native';
import {PinkButton} from '../../components/buttons/CustomButton';
import styles from './UpdateAppScreen.style';
import icons from '../../assets/icons';

const UpdateAppScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.mainView}>
        <Image source={icons.logo} />
        <PinkHeaderText style={styles.headerText}>
          Das neue App-Update ist jetzt verfügbar.
        </PinkHeaderText>
        <PinkButton
          text={'Jetzt aktualisieren.'}
          onPress={() =>
            Linking.openURL(
              'https://play.google.com/store/apps/details?id=pl.com.verbum.fmc.appfmcfamily',
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default UpdateAppScreen;
