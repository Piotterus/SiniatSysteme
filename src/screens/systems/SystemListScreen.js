import React, {useCallback, useState} from 'react';
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
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import useFetch from '../../hooks/useFetch';

const SystemItem = props => {
  const navigation = useNavigation();

  const createData = () => {
    let dataList = [];
    let data = props.data;
    // console.log(props.data);
    for (let i in data) {
      dataList.push(
        <View style={styles.systemListScreen.systemItemDataRow} key={i}>
          <SmallText>{i}</SmallText>
          <BoldText style={{color: colors.violet}}>{data[i]}</BoldText>
          {/*{item.image !== undefined && (*/}
          {/*  <Image*/}
          {/*    style={styles.systemListScreen.systemItemDataIcon}*/}
          {/*    source={icons.system.question}*/}
          {/*  />*/}
          {/*)}*/}
        </View>,
      );
    }
    return dataList;
  };

  return (
    <View style={styles.systemListScreen.systemItem}>
      <View style={styles.systemListScreen.systemItemTitleRow}>
        <BoldText style={{width: '40%'}}>{props.data?.systemName}</BoldText>
        <SystemKarteButton style={{width: '30%'}} />
      </View>
      {props.data?.fields.map((item, index) => {
        return (
          <View style={styles.systemListScreen.systemItemDataRow} key={i}>
            <SmallText>{item.label}</SmallText>
            <BoldText style={{color: colors.violet}}>{item.value}</BoldText>
            {/*{item.image !== undefined && (*/}
            {/*  <Image*/}
            {/*    style={styles.systemListScreen.systemItemDataIcon}*/}
            {/*    source={icons.system.question}*/}
            {/*  />*/}
            {/*)}*/}
          </View>
        );
      })}
      {/*{createData()}*/}
      {/*{props.data.values.map((item, index) => {*/}
      {/*  return (*/}
      {/*    <View style={styles.systemListScreen.systemItemDataRow} key={index}>*/}
      {/*      <SmallText>{item.label}</SmallText>*/}
      {/*      <BoldText style={{color: colors.violet}}>{item.value}</BoldText>*/}
      {/*      {item.image !== undefined && (*/}
      {/*        <Image*/}
      {/*          style={styles.systemListScreen.systemItemDataIcon}*/}
      {/*          source={icons.system.question}*/}
      {/*        />*/}
      {/*      )}*/}
      {/*    </View>*/}
      {/*  );*/}
      {/*})}*/}
      <TouchableOpacity
        style={styles.systemListScreen.systemItemPlus}
        onPress={() =>
          navigation.navigate('SystemItem', {
            system: props.system,
            step2: props.step2,
            step3: props.step3,
            systemId: props.data.systemName,
            dbId: props.data.id,
          })
        }>
        <Image source={icons.plusCircle} />
      </TouchableOpacity>
    </View>
  );
};

const SystemListScreen = () => {
  const [systemList, setSystemList] = useState([]);

  const route = useRoute();
  const {fetchData} = useFetch();

  useFocusEffect(
    useCallback(() => {
      const getData = {
        returnType: '',
        method: 'post',
      };
      const postData = {
        system: route.params.data?.system?.value,
        stage: 'L2',
        step2: route.params.data?.step2?.value,
        step3: route.params.data?.step3?.value,
        selectedFiltersL1: route.params.data?.selectedFiltersL1,
        selectedFiltersL2: route.params.data?.selectedFiltersL2,
      };
      console.log('getData - ', getData);
      console.log('postData - ', postData);
      const response = fetchData(
        res => {
          console.log(res);
          // let filters = addSelectedValues(res.data.filters);
          // setFilterList(filters);
          setSystemList(res.data);
        },
        'system/getSystemsBasedOnFilters',
        getData,
        postData,
      );
    }, []),
  );

  console.log(route.params);
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
            return (
              <SystemItem
                key={index}
                data={item}
                system={route.params.data?.system}
                step2={route.params.data?.step2}
                step3={route.params.data?.step3}
              />
            );
          }}
          style={styles.systemListScreen.systemList}
          contentContainerStyle={styles.systemListScreen.systemListContainter}
        />
      </ScrollView>
    </CustomBackground>
  );
};

export default SystemListScreen;
