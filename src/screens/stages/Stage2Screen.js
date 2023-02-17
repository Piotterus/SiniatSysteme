import React, {useCallback, useState} from 'react';
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
import {useFocusEffect, useRoute} from '@react-navigation/native';
import useFetch from '../../hooks/useFetch';
import Breadcrumps from '../../components/breadcrumbs/Breadcrumps';

const Stage2Screen = () => {
  const [stageModalVisible, setStageModalVisible] = useState(false);
  const [filterList, setFilterList] = useState({});
  const [chosenFilter, setChosenFilter] = useState();
  const route = useRoute();
  const {fetchData} = useFetch();

  useFocusEffect(
    useCallback(() => {
      const getData = {
        system: route.params?.system?.value,
        step2: route.params?.step2?.value,
        step3: route.params?.step3?.value,
        stage: 'L1',
      };
      const response = fetchData(
        res => {
          setFilterList(res.data.filters);
        },
        'system/getFilters',
        getData,
        null,
      );
    }, []),
  );

  const createFiltersList = () => {
    let filters = [];
    for (let i in filterList) {
      let values = '...';
      if (filterList[i].selectedValues !== undefined) {
        values = filterList[i].selectedValues.join(', ');
      }
      filters.push(
        <FilterSelect
          key={i}
          label={filterList[i].german}
          onPress={() => chooseFilter(i)}
          values={values}
          tooltip={filterList[i].tooltip}
        />,
      );
    }
    return filters;
  };

  const chooseFilter = filter => {
    setStageModalVisible(true);
    setChosenFilter(filter);
  };

  const chooseValue = (value, status) => {
    let filters = filterList;
    if (filters[chosenFilter].selectedValues !== undefined) {
      const index = filters[chosenFilter].selectedValues.indexOf(value);
      if (index >= 0) {
        const deleted = filters[chosenFilter].selectedValues.splice(index, 1);
      } else {
        filters[chosenFilter].selectedValues.push(value);
      }
    } else {
      const selected = [value];
      filters[chosenFilter].selectedValues = selected;
    }
    setFilterList(filters);
  };

  console.log('Stage2');
  console.log(route.params);
  // console.log(chosenFilter);
  return (
    <CustomBackground header={'siniat'}>
      <Stage2Modal
        visible={stageModalVisible}
        setVisible={setStageModalVisible}
        filterList={filterList}
        chosenFilter={chosenFilter}
        system={route.params?.system}
        step2={route.params?.step2}
        step3={route.params?.step3}
        chooseValue={chooseValue}
      />
      <SystemHeader system={route.params.system} />
      <StageNavigation />
      <Breadcrumps
        text1={route.params?.step2?.label}
        text2={route.params?.step3?.label}
      />
      <View style={styles.stage2.filterView}>
        <SmallText>1. Scritt</SmallText>
        {createFiltersList()}
        {/*<FilterSelect
          label={'Feuerwiderstandsdauer [min]'}
          onPress={setStageModalVisible}
        />
        <FilterSelect
          label={'Brandschutzrichtung'}
          onPress={setStageModalVisible}
        />*/}
      </View>
    </CustomBackground>
  );
};

export default Stage2Screen;
