import React, {useState} from 'react';
import CustomBackground from '../../components/backgrounds/CustomBackground';
import {SystemHeader} from '../../components/headers/CustomHeaders';
import {
  FlatList,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  BoldText,
  PinkHeaderText,
  SmallText,
} from '../../components/texts/CustomText';
import icons from '../../assets/icons';
import styles from './SystemScreen.style';
import {SystemKarteButton} from '../../components/buttons/CustomButton';
import colors from '../../assets/colors';
import {useNavigation} from '@react-navigation/native';

const SystemItem = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.systemListScreen.systemItem}>
      <View style={styles.systemListScreen.systemItemTitleRow}>
        <BoldText style={{width: '40%'}}>{props.data.title}</BoldText>
        <SystemKarteButton style={{width: '30%'}} />
      </View>
      {props.data.values.map((item, index) => {
        return (
          <View style={styles.systemListScreen.systemItemDataRow} key={index}>
            <SmallText>{item.label}</SmallText>
            <BoldText style={{color: colors.violet}}>{item.value}</BoldText>
            {item.image !== undefined && (
              <Image
                style={styles.systemListScreen.systemItemDataIcon}
                source={icons.system.question}
              />
            )}
          </View>
        );
      })}
      <TouchableOpacity
        style={styles.systemListScreen.systemItemPlus}
        onPress={() => navigation.navigate('SystemItem')}>
        <Image source={icons.plusCircle} />
      </TouchableOpacity>
    </View>
  );
};

const SystemListScreen = () => {
  const [systemList, setSystemList] = useState([
    {
      title: 'SD51 - CD-N/82/GKF - DF/MW',
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
          image: icons.system.question,
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
    },
    {
      title: 'SD51 - CD-N/82/GKF - DF/MW',
      values: [
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
    },
    {
      title: 'SD51 - CD-N/82/GKF - DF/MW',
      values: [
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
    },
    {
      title: 'SD51 - CD-N/82/GKF - DF/MW',
      values: [
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
    },
  ]);

  return (
    <CustomBackground header={'siniat'}>
      <SystemHeader />
      <View style={styles.systemListScreen.rowView}>
        <SmallText>Twoje filtry</SmallText>
        <Image source={icons.filter} />
      </View>
      <View style={styles.systemListScreen.rowView}>
        <SmallText>Es wurden</SmallText>
        <SmallText>2 Systemvarianten gefunden</SmallText>
      </View>
      <View style={styles.systemListScreen.rowView}>
        <TextInput
          style={styles.systemListScreen.textInput}
          placeholder={'Suchen'}
        />
      </View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{width: '100%', height: '100%'}}>
        <FlatList
          data={systemList}
          renderItem={({item, index, separators}) => {
            return <SystemItem key={index} data={item} />;
          }}
          style={styles.systemListScreen.systemList}
          contentContainerStyle={styles.systemListScreen.systemListContainter}
        />
      </ScrollView>
    </CustomBackground>
  );
};

export default SystemListScreen;
