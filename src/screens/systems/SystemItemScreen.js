import React, {useCallback, useState, useContext} from 'react';
import CustomBackground from '../../components/backgrounds/CustomBackground';
import {SystemHeader} from '../../components/headers/CustomHeaders';
import {Image, Linking, TextInput, TouchableOpacity, View} from 'react-native';
import {BoldText, SmallText} from '../../components/texts/CustomText';
import Breadcrumps from '../../components/breadcrumbs/Breadcrumps';
import icons from '../../assets/icons';
import {
  ProductButton,
  SendButton,
  SystemKarteButton,
} from '../../components/buttons/CustomButton';
import {ScreenWidth} from '@rneui/base';
import styles from './SystemScreen.style';
import colors from '../../assets/colors';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import useFetch from '../../hooks/useFetch';
import base64 from 'react-native-base64';
import ApiContext from '../../contexts/ApiContext';

const SystemItem = props => {
  const {siteUrl} = useContext(ApiContext);
  return (
    <View style={styles.systemItemScreen.systemItem.mainView}>
      <BoldText style={styles.systemItemScreen.systemItem.title}>
        {props.system?.systemName}
      </BoldText>
      <View style={styles.systemItemScreen.systemItem.descriptionRow}>
        <BoldText
          style={[styles.systemItemScreen.systemItem.desciptionRowItem]}>
          Für detailliertere Informationen öffnen Sie bitte die Systemkarte oder
          die verknüpften Dokumente.
        </BoldText>
        <Image
          source={{uri: props.system?.image}}
          style={[
            styles.systemItemScreen.systemItem.desciptionRowItem,
            {marginLeft: 30},
          ]}
        />
      </View>
      <SystemKarteButton
        style={styles.systemItemScreen.systemItem.systemKarteButton}
        onPress={() =>
          Linking.openURL(
            siteUrl +
              'pdf-generate/' +
              props.systemType?.value +
              '/' +
              base64.encode(props.system?.systemID) +
              '/' +
              props.system?.id,
          )
        }
      />
      <View style={styles.systemItemScreen.systemItem.systemItem}>
        <View style={styles.systemItemScreen.systemItem.systemItemTitleRow}>
          <BoldText>GRUNDDATEN</BoldText>
        </View>
        {props.system?.fields?.basic.map((item, index) => {
          return (
            <View
              style={styles.systemItemScreen.systemItem.systemItemDataRow}
              key={index}>
              <SmallText style={{alignSelf: 'flex-start'}}>
                {item.label}
              </SmallText>
              <BoldText
                style={[
                  styles.systemItemScreen.systemItem.violetText,
                  {alignSelf: 'flex-end'},
                ]}>
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
          <BoldText>ANGABEN</BoldText>
        </View>
        {props.system?.fields?.extra.map((item, index) => {
          return (
            <View
              style={styles.systemItemScreen.systemItem.systemItemDataRow}
              key={index}>
              <SmallText style={{alignSelf: 'flex-start'}}>
                {item.label}
              </SmallText>
              <BoldText
                style={[
                  styles.systemItemScreen.systemItem.violetText,
                  {alignSelf: 'flex-end'},
                ]}>
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
  const [system, setSystem] = useState({});
  const [note, setNote] = useState('');

  const route = useRoute();
  const navigation = useNavigation();
  const {fetchData} = useFetch();
  const {siteUrl} = useContext(ApiContext);

  useFocusEffect(
    useCallback(() => {
      const getData = {
        system: route.params?.system?.value,
        systemId: route.params.systemId,
        dbId: route.params.dbId,
      };
      console.log('getData - ', getData);
      const response = fetchData(
        res => {
          console.log(res);
          // let filters = addSelectedValues(res.data.filters);
          // setFilterList(filters);
          // setSystemList(res.data);
          setSystem(res.data);
        },
        'system/getSingleSystem',
        getData,
        null,
      );
    }, []),
  );

  console.log(route.params);

  return (
    <CustomBackground header={'siniat'}>
      <SystemHeader system={route.params.system} />
      <Breadcrumps
        text1={route.params?.step2?.label}
        text2={route.params?.step3?.label}
      />
      <SystemItem system={system} systemType={route.params?.system} />
      {system?.brochure !== '' && system?.brochure !== undefined && (
        <ProductButton
          onPress={() => Linking.openURL(system?.brochure)}
          text={'Productbrochure'}
        />
      )}
      {system?.constructionProof !== '' &&
        system?.constructionProof !== undefined && (
          <ProductButton
            onPress={() => Linking.openURL(system?.constructionProof)}
            text={'Brandschutznachweis'}
          />
        )}
      {system?.soundProtection !== '' &&
        system?.soundProtection !== undefined && (
          <ProductButton
            onPress={() => Linking.openURL(system?.soundProtection)}
            text={'Schallschutznachweis'}
          />
        )}
      {/*Montageanleitung - assembly Construction*/}
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
        value={note}
        onChangeText={text => setNote(text)}
      />
      <SendButton
        style={{marginTop: 20}}
        onPress={() =>
          Linking.openURL(
            siteUrl +
              'pdf-generate/' +
              route.params?.system?.value +
              '/' +
              base64.encode(system?.systemID) +
              '/' +
              system?.id +
              '/' +
              base64.encode(note),
          )
        }
      />
    </CustomBackground>
  );
};

export default SystemItemScreen;
