import React, {useState} from 'react';
import CustomBackground from '../../components/backgrounds/CustomBackground';
import {SystemHeader} from '../../components/headers/CustomHeaders';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {BoldText, SmallText} from '../../components/texts/CustomText';
import Breadcrumps from '../../components/breadcrumbs/Breadcrumps';
import icons from '../../assets/icons';
import {
  ProductBrochureButton,
  SendButton,
  SystemKarteButton,
} from '../../components/buttons/CustomButton';
import {ScreenWidth} from '@rneui/base';
import styles from './SystemScreen.style';
import colors from '../../assets/colors';

const SystemItem = props => {
  return (
    <View style={styles.systemItemScreen.systemItem.mainView}>
      <BoldText style={styles.systemItemScreen.systemItem.title}>
        {props.system.title}
      </BoldText>
      <View style={styles.systemItemScreen.systemItem.descriptionRow}>
        <BoldText
          style={[styles.systemItemScreen.systemItem.desciptionRowItem, ,]}>
          {props.system.description}
        </BoldText>
        <Image
          source={icons.systemImage}
          style={[
            styles.systemItemScreen.systemItem.desciptionRowItem,
            {marginLeft: 30},
          ]}
        />
      </View>
      <SystemKarteButton
        style={styles.systemItemScreen.systemItem.systemKarteButton}
      />
      <View style={styles.systemItemScreen.systemItem.systemItem}>
        <View style={styles.systemItemScreen.systemItem.systemItemTitleRow}>
          <BoldText>GRUNDINFORMATION</BoldText>
        </View>
        {props.system.values.map((item, index) => {
          return (
            <View
              style={styles.systemItemScreen.systemItem.systemItemDataRow}
              key={index}>
              <SmallText>{item.label}</SmallText>
              <BoldText style={styles.systemItemScreen.systemItem.violetText}>
                {item.value}
              </BoldText>
              {item.image !== undefined && (
                <Image
                  style={styles.systemItemScreen.systemItem.systemItemDataIcon}
                  source={icons.system.question}
                />
              )}
            </View>
          );
        })}
        <View style={styles.systemItemScreen.systemItem.systemItemTitleRow}>
          <BoldText>GENAUE INFORMATION</BoldText>
        </View>
        {props.system.extraValues.map((item, index) => {
          return (
            <View
              style={styles.systemItemScreen.systemItem.systemItemDataRow}
              key={index}>
              <SmallText>{item.label}</SmallText>
              <BoldText style={styles.systemItemScreen.systemItem.violetText}>
                {item.value}
              </BoldText>
              {item.image !== undefined && (
                <Image
                  style={styles.systemItemScreen.systemItem.systemItemDataIcon}
                  source={icons.system.question}
                />
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

const SystemItemScreen = () => {
  const [system, setSystem] = useState({
    title: 'SD51 - CD-N/82/GKF - DF/MW',
    description:
      'Für detailliertere Informationen öffnen Sie bitte die Systemkarte oder die verknüpften Dokumente.',
    image: icons.systemImage,
    values: [
      {
        label: 'System ID',
        value: 'SD51',
      },
      {
        label: 'Fire Resistance',
        value: 'F 30-A',
        image: icons.system.fire,
      },
      {
        label: 'Fire Resistance Direction',
        value: 'von oben',
        image: icons.system.question,
      },
      {
        label: 'System ID',
        value: 'SD51',
      },
      {
        label: 'Fire Resistance',
        value: 'F 30-A',
      },
      {
        label: 'Fire Resistance Direction',
        value: 'von oben',
      },
      {
        label: 'System ID',
        value: 'SD51',
      },
      {
        label: 'Fire Resistance',
        value: 'F 30-A',
      },
      {
        label: 'Fire Resistance Direction',
        value: 'von oben',
      },
    ],
    extraValues: [
      {
        label: 'System ID',
        value: 'SD51',
      },
      {
        label: 'Fire Resistance',
        value: 'F 30-A',
        image: icons.system.fire,
      },
      {
        label: 'Fire Resistance Direction',
        value: 'von oben',
        image: icons.system.question,
      },
      {
        label: 'System ID',
        value: 'SD51',
      },
      {
        label: 'Fire Resistance',
        value: 'F 30-A',
      },
      {
        label: 'Fire Resistance Direction',
        value: 'von oben',
      },
      {
        label: 'System ID',
        value: 'SD51',
      },
      {
        label: 'Fire Resistance',
        value: 'F 30-A',
      },
      {
        label: 'Fire Resistance Direction',
        value: 'von oben',
      },
    ],
  });
  return (
    <CustomBackground header={'siniat'}>
      <SystemHeader />
      <Breadcrumps />
      <SystemItem system={system} />
      <ProductBrochureButton />
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={{
          borderWidth: 0.5,
          borderColor: colors.grey,
          width: '100%',
          marginTop: 20,
        }}
        placeholder={'Hinweisfeld für Anmerkungen zum Bauvorhaben'}
        placeholderTextColor={colors.grey}
      />
      <SendButton style={{marginTop: 20}} />
    </CustomBackground>
  );
};

export default SystemItemScreen;
