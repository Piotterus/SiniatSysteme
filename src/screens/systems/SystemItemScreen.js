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
import ImageModal from '../../components/modals/ImageModal';

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
        <TouchableOpacity
          onPress={() => props.setImageModalVisible(true)}
          style={[
            styles.systemItemScreen.systemItem.desciptionRowItem,
            {marginLeft: 30, minHeight: 100},
          ]}>
          <Image
            source={{uri: props.system?.image}}
            resizeMode={'contain'}
            style={[styles.systemItemScreen.systemItem.desciptionRowItem]}
          />
        </TouchableOpacity>
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
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

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

  if (system?.image !== undefined) {
    Image.getSize(system?.image, (width, height) => {
      setImageWidth(width);
      setImageHeight(height);
    });
  }

  console.log(route.params);

  return (
    <CustomBackground header={'siniat'}>
      <ImageModal
        visible={imageModalVisible}
        imageModal={system?.image}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
        setVisible={setImageModalVisible}
      />
      <SystemHeader system={route.params.system} />
      <Breadcrumps
        text1={route.params?.step2?.breadcrumb}
        text2={route.params?.step3?.breadcrumb}
      />
      <SystemItem
        system={system}
        systemType={route.params?.system}
        setImageModalVisible={setImageModalVisible}
      />
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
      <TextInput
        multiline={true}
        // numberOfLines={4}
        style={{
          borderWidth: 0.5,
          borderColor: colors.black,
          width: '100%',
          marginTop: 20,
          paddingVertical: 20,
          paddingHorizontal: 10,
          backgroundColor: colors.white,
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
