import React, {useCallback, useEffect, useState} from 'react';
import CustomBackground from '../../components/backgrounds/CustomBackground';
import {
  Stage1Modal,
  Stage2Modal,
  WallHeightModal,
} from '../../components/modals/CustomModals';
import {Image, View} from 'react-native';
import styles from './StagesScreen.style';
import icons from '../../assets/icons';
import {MainMenuText, SmallText} from '../../components/texts/CustomText';
import StageNavigation from '../../components/stageNavigation/StageNavigation';
import {PinkButton, WhiteButton} from '../../components/buttons/CustomButton';
import {
  FilterInput,
  FilterSelect,
  FilterSelected,
} from '../../components/filters/CustomFilters';
import {SystemHeader} from '../../components/headers/CustomHeaders';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import useFetch from '../../hooks/useFetch';
import Breadcrumps from '../../components/breadcrumbs/Breadcrumps';

const Stage2Screen = () => {
  const [stageModalVisible, setStageModalVisible] = useState(false);
  const [wallHeightModalVisible, setWallHeightModalVisible] = useState(false);
  const [wallHeightModalShowed, setWallHeightModalShowed] = useState(false);
  const [wallHeightModalText, setWallHeightModalText] = useState('');
  const [filterList, setFilterList] = useState({});
  const [chosenFilter, setChosenFilter] = useState();
  const route = useRoute();
  const navigation = useNavigation();
  const {fetchData} = useFetch();

  useEffect(() => {
    console.log('FilterList UseEffect');
    console.log(filterList);
  }, [filterList]);
  console.log('FilterList --- ');
  console.log(filterList);
  useFocusEffect(
    useCallback(
      filterList => {
        console.log('CallBackCalled');
        console.log(filterList);
        const getData = {
          system: route.params?.system?.value,
          step2: route.params?.step2?.value,
          step3: route.params?.step3?.value,
          stage: 'L1',
        };
        const response = fetchData(
          res => {
            console.log('RES FETCHDATA');
            console.log(res.data.filters);
            console.log(filterList);
            let filters = addSelectedValues(res.data.filters);
            filters = sortFilterValues(filters);
            setFilterList(filters);
          },
          'system/getFilters',
          getData,
          null,
        );
      },
      [route.params],
    ),
  );

  const addSelectedValues = filters => {
    console.log('UseEffect');
    console.log(filterList);
    for (let i in filters) {
      console.log(i);
      if (filterList[i] !== undefined) {
        console.log(filterList[i]);
        console.log(filterList[i].name);
        if (filterList[i].selectedValues !== undefined) {
          // console.log(route.params.filter[i].selectedValues);
          filters[i].selectedValues = filterList[i].selectedValues;
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

  const createFiltersList = () => {
    let filters = [];
    for (let i in filterList) {
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
          let values = filterList[i].values.join(', ');
          filters.push(
            <FilterSelected
              key={i}
              label={filterList[i].german}
              values={values}
              tooltip={filterList[i].tooltip}
            />,
          );
        } else {
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
    console.log('ChooseValue');
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
    console.log('EnterValue');
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

  const checkWallHeight = () => {
    if (!wallHeightModalShowed) {
      if (filterList.wallHeight !== undefined) {
        if (filterList.wallHeight.selectedValues !== undefined) {
        } else {
          setWallHeightModalText(
            'Sie haben die Höhe der Wand nicht angegeben. Bitte geben Sie eine Mindesthöhe ein und wir zeigen Ihnen die für Sie passenden Systeme an.',
          );
          setWallHeightModalShowed(true);
          setWallHeightModalVisible(true);
          return true;
        }
      }
      if (filterList.spanWidth !== undefined) {
        if (filterList.spanWidth.selectedValues !== undefined) {
        } else {
          setWallHeightModalText(
            'Sie haben die Spannweite nicht angegeben. Bitte geben Sie eine Spannweite ein und wir zeigen Ihnen die für Sie passenden Systeme an.',
          );
          setWallHeightModalShowed(true);
          setWallHeightModalVisible(true);
          return true;
        }
      }
    }
    return false;
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

  const processFilters = () => {
    // let filters = {...filterList};
    for (let i in filterList) {
      if (filterList[i].selectedValues !== undefined) {
        if (
          i === 'soundReduction' ||
          (i === 'fireResistance' &&
            route.params?.system.value !== 'stutzentrager')
        ) {
          console.log(filterList[i]);
          let minimalValue = '';
          filterList[i].selectedValues.forEach((item, index) => {
            if (
              !isNaN(parseFloat(item)) &&
              (minimalValue === '' || minimalValue > parseFloat(item))
            ) {
              minimalValue = parseFloat(item);
            }
          });
          if (minimalValue !== '') {
            filterList[i].values.forEach((item, index) => {
              if (
                !isNaN(parseFloat(item)) &&
                minimalValue < parseFloat(item) &&
                !filterList[i].selectedValues.includes(item)
              ) {
                filterList[i].selectedValues.push(item);
              }
            });
          }
        }
      }
    }
    for (let i in filterList) {
      console.log(filterList[i].name);
      console.log(filterList[i].selectedValues);
    }
  };

  console.log('Stage2');
  console.log(route.params);
  console.log(filterList);
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
        getSelectedFilters={getSelectedFilters}
      />
      <WallHeightModal
        visible={wallHeightModalVisible}
        setVisible={setWallHeightModalVisible}
        text={wallHeightModalText}
      />
      <SystemHeader system={route.params?.system} />
      <StageNavigation />
      <Breadcrumps
        text1={route.params?.step2?.breadcrumb}
        text2={route.params?.step3?.breadcrumb}
      />
      <View style={styles.stage2.filterView}>
        <SmallText>1. Scritt</SmallText>
        {createFiltersList()}
        <PinkButton
          text={'Weiter >>>'}
          style={{marginVertical: 20, width: '100%'}}
          onPress={() => {
            let wallHeightShow = checkWallHeight();
            if (!wallHeightShow) {
              processFilters();
              console.log('KABELKANALE CHECK');
              console.log(route.params?.system.value === 'kabelkanale');
              if (route.params?.system.value === 'kabelkanale') {
                console.log('KABELKANALE');
                const [selectedFiltersL1, selectedFiltersL2] =
                  getSelectedFilters();
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
              } else {
                navigation.navigate('Stage3', {
                  system: route.params?.system,
                  step2: route.params?.step2,
                  step3: route.params?.step3,
                  filter: filterList,
                });
              }
            }
          }}
        />
      </View>
    </CustomBackground>
  );
};

export default Stage2Screen;
