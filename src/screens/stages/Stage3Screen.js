import React, {useState, useCallback, useEffect} from 'react';
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
import Breadcrumps from '../../components/breadcrumbs/Breadcrumps';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import useFetch from '../../hooks/useFetch';

const Stage3Screen = () => {
  const [stageModalVisible, setStageModalVisible] = useState(false);
  const [filterList, setFilterList] = useState({});
  const [chosenFilter, setChosenFilter] = useState();
  const [systemCount, setSystemCount] = useState();
  const route = useRoute();
  const navigation = useNavigation();
  const {fetchData} = useFetch();

  useFocusEffect(
    useCallback(() => {
      console.log('Params', route.params.filter);
      const getData = {
        system: route.params?.system?.value,
        step2: route.params?.step2?.value,
        step3: route.params?.step3?.value,
        stage: 'L2',
      };
      const response = fetchData(
        res => {
          console.log(res);
          let filters = addSelectedValues(res.data.filters);
          setFilterList(filters);
        },
        'system/getFilters',
        getData,
        null,
      );
    }, []),
  );

  const addSelectedValues = filters => {
    console.log('UseEffect');
    for (let i in filters) {
      console.log(i);
      if (route.params.filter[i] !== undefined) {
        console.log(route.params.filter[i]);
        console.log(route.params.filter[i].name);
        if (route.params.filter[i].selectedValues !== undefined) {
          console.log(route.params.filter[i].selectedValues);
          filters[i].selectedValues = route.params.filter[i].selectedValues;
        }
      }
    }
    return filters;
  };

  const getSelectedFilters = () => {
    let selectedFiltersL1 = [];
    let selectedFiltersL2 = [];
    for (let i in filterList) {
      if (
        filterList[i].selectedValues !== undefined &&
        filterList[i].selectedValues.length > 0
      ) {
        let filter = {
          id: filterList[i].id,
          name: filterList[i].name,
          type: filterList[i].type,
          value: filterList[i].selectedValues,
        };
        if (filterList[i].stage === 'L1') {
          selectedFiltersL1.push(filter);
        } else if (filterList[i].stage === 'L2') {
          selectedFiltersL2.push(filter);
        }
      }
    }
    return [selectedFiltersL1, selectedFiltersL2];
  };

  const updateSystemCount = async () => {
    const [selectedFiltersL1, selectedFiltersL2] = getSelectedFilters();
    const getData = {
      returnType: 'count',
      method: 'post',
    };
    const postData = {
      system: route.params?.system?.value,
      step2: route.params?.step2?.value,
      step3: route.params?.step3?.value,
      stage: 'L2',
      selectedFiltersL1: selectedFiltersL1,
      selectedFiltersL2: selectedFiltersL2,
    };
    console.log('UpdateSystemCount');
    console.log(getData);
    console.log(postData);
    const response = await fetchData(
      res => {
        console.log(res);
        setSystemCount(res.data);
      },
      'system/getSystemsBasedOnFilters',
      getData,
      postData,
    );
  };

  useEffect(() => {
    updateSystemCount();
  }, [filterList]);

  const createSelectedFiltersList = () => {
    let filters = [];
    for (let i in filterList) {
      if (filterList[i].stage !== 'L1') {
        continue;
      }

      let values = '...';
      if (filterList[i].selectedValues !== undefined) {
        values = filterList[i].selectedValues.join(', ');
      }
      filters.push(
        <FilterSelected key={i} label={filterList[i].german} values={values} />,
      );
    }
    return filters;
  };

  const createFiltersList = () => {
    let filters = [];
    for (let i in filterList) {
      if (filterList[i].stage !== 'L2') {
        continue;
      }
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
    console.log('chooseValue');
    let filters = {...filterList};
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

  const navigateToSystemList = () => {
    const [selectedFiltersL1, selectedFiltersL2] = getSelectedFilters();
    const data = {
      system: route.params?.system,
      step2: route.params?.step2,
      step3: route.params?.step3,
      stage: 'L2',
      selectedFiltersL1: selectedFiltersL1,
      selectedFiltersL2: selectedFiltersL2,
      filterList: filterList,
    };
    navigation.navigate('SystemList', {data: data});
  };

  return (
    <CustomBackground
      header={'siniat'}
      showButton={true}
      buttonCount={systemCount}
      buttonOnPress={() => navigateToSystemList()}>
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
      <SystemHeader text={route.params?.system?.label} />
      <StageNavigation />
      <Breadcrumps
        text1={route.params?.step2?.label}
        text2={route.params?.step3?.label}
      />
      <View style={styles.stage2.filterView}>
        <SmallText>1. Scritt</SmallText>
        {createSelectedFiltersList()}
        <SmallText>2. Scritt</SmallText>
        {createFiltersList()}
      </View>
    </CustomBackground>
  );
};

export default Stage3Screen;
