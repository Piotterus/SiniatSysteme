import React, {useState, useCallback, useEffect} from 'react';
import CustomBackground from '../../components/backgrounds/CustomBackground';
import {Stage2Modal} from '../../components/modals/CustomModals';
import {Image, View} from 'react-native';
import styles from './StagesScreen.style';
import {SmallText} from '../../components/texts/CustomText';
import StageNavigation from '../../components/stageNavigation/StageNavigation';
import {
  FilterInput,
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
      console.log('Stage3 Callback Called');
      console.log('Params', route.params.filter);
      console.log(route.params.selectedFiltersL1);
      const getData = {
        system: route.params?.system?.value,
        step2: route.params?.step2?.value,
        step3: route.params?.step3?.value,
        stage: 'L2',
      };
      const postData = {
        selectedFilters: route.params.selectedFiltersL1,
      };
      const response = fetchData(
        res => {
          console.log(res);
          let filters = addSelectedValues(res.data.filters);
          filters = sortFilterValues(filters);
          setFilterList(filters);
        },
        'system/getFilters',
        getData,
        postData,
      );
    }, [route.params]),
  );

  const addSelectedValues = filters => {
    // console.log('UseEffect');
    for (let i in filters) {
      // console.log(i);
      if (route.params.filter[i] !== undefined) {
        // console.log(route.params.filter[i]);
        // console.log(route.params.filter[i].name);
        if (route.params.filter[i].selectedValues !== undefined) {
          // console.log(route.params.filter[i].selectedValues);
          filters[i].selectedValues = route.params.filter[i].selectedValues;
        }
      }
    }
    return filters;
  };

  const sortFilterValues = filters => {
    console.log('SortFilterValues');
    for (let i in filters) {
      let sortedValues = filters[i].values.sort((item1, item2) => {
        if (!isNaN(parseFloat(item1))) {
          item1 = parseFloat(item1);
        }
        if (!isNaN(parseFloat(item2))) {
          item2 = parseFloat(item2);
        }
        if (typeof item1 === typeof item2) {
          return item1 > item2;
        } else if (typeof item1 === 'number') {
          return -1;
        } else if (typeof item2 === 'number') {
          return 1;
        }
      });
      filters[i].values = sortedValues;
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
    // console.log('UpdateSystemCount');
    // console.log(getData);
    // console.log(postData);
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
        <FilterSelected
          key={i}
          label={filterList[i].german}
          values={values}
          tooltip={filterList[i].tooltip}
        />,
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
      // console.log(filterList[i].name);
      // console.log(filterList[i].values);
      // console.log(filterList[i]?.selectedValues);
      if (filterList[i].type === 'from') {
        let value = '';
        if (filterList[i].selectedValues !== undefined) {
          value = filterList[i].selectedValues.join(', ');
        }
        filters.push(
          <FilterInput
            key={i}
            label={filterList[i].german}
            value={value}
            tooltip={filterList[i].tooltip}
            onChangeText={enterValue}
            index={i}
          />,
        );
      } else {
        if (filterList[i].values.length === 1) {
          if (filterList[i].values[0] !== 'n/a') {
            let values = filterList[i].values.join(', ');
            filters.push(
              <FilterSelected
                key={i}
                label={filterList[i].german}
                values={values}
                tooltip={filterList[i].tooltip}
              />,
            );
          }
        } else if (filterList[i].values.length > 1) {
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
      }
    }
    return filters;
  };

  const chooseFilter = filter => {
    setStageModalVisible(true);
    setChosenFilter(filter);
  };

  const chooseValue = (value, status) => {
    // console.log('chooseValue');
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

  const enterValue = (value, index) => {
    let filters = {...filterList};
    // console.log('EnterValue');
    // console.log(value, index);
    // if (filters[index].selectedValues !== undefined) {
    //   const index = filters[index].selectedValues.indexOf(value);
    //   if (index >= 0) {
    //     const deleted = filters[index].selectedValues.splice(index, 1);
    //   } else {
    //     filters[index].selectedValues.push(value);
    //   }
    // } else {
    const selected = [value];
    filters[index].selectedValues = selected;
    // }
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
      <SystemHeader system={route.params.system} />
      <StageNavigation />
      <Breadcrumps
        text1={route.params?.step2?.breadcrumb}
        text2={route.params?.step3?.breadcrumb}
      />
      <View style={styles.stage2.filterView}>
        <SmallText>1. Schritt</SmallText>
        {createSelectedFiltersList()}
        <SmallText>2. Schritt</SmallText>
        {createFiltersList()}
      </View>
    </CustomBackground>
  );
};

export default Stage3Screen;
