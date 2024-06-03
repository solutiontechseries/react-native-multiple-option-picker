import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Buttons from './components/button';
import {CheckBox} from './components/checkbox';
import SearchBar from './components/search-bar';
import {PickerProps} from './utils/props-type';
import {COLORS} from './utils/values';

const MultipleSelection: React.FC<PickerProps> = ({
  show,
  type,
  enableSearch = true,
  searchPlaceholder = 'Search here',
  pickerTitle,
  emptyTitle = 'No Record(s) Found',
  data,
  value,
  rowTitleKey,
  rowUniqueKey,
  extraTitleSymbol,
  extraTitleKey,
  onDone,
  onClose,
}) => {
  const [selectedData, setSelectedData] = useState<any>([]);
  const [searchData, setSearchData] = useState([]);
  const [searchText, setSearchText] = useState<string>('');
  const [allSelected, setAllSelected] = useState<boolean>(false);
  const listRef = React.useRef(null);
  useEffect(() => {
    if (value !== '' && show && type === 'single') {
      setSelectedData([value]);
      const index = data?.findIndex(
        item => item[rowUniqueKey] == value[rowUniqueKey],
      );
      if (show && index > -1) {
        listRef.current?.scrollToIndex({
          index: index,
          animated: true,
          viewPosition: 0.5,
        });
      }
    } else if (
      value !== '' &&
      show &&
      type === 'multiple' &&
      value?.length > 0
    ) {
      setSelectedData(
        data?.filter(e =>
          value?.some(item => item[rowUniqueKey] === e[rowUniqueKey]),
        ),
      );
    }
    if (selectedData?.length === data?.length) {
      setAllSelected(true);
    } else {
      setAllSelected(false);
    }
    return () => {
      setSearchText('');
      setSearchData([]);
    };
  }, [show, value]);

  useEffect(() => {
    if (selectedData?.length === data?.length) {
      setAllSelected(true);
    } else {
      setAllSelected(false);
    }
  }, [selectedData]);

  return React.useMemo(() => {
    const onChangeText = (txt: string) => {
      setSearchData(
        data.filter(item => {
          if (extraTitleKey) {
            return (
              item[rowTitleKey]?.toLowerCase()?.includes(txt?.toLowerCase()) ||
              item[extraTitleSymbol]
                ?.toLowerCase()
                ?.includes(txt?.toLowerCase())
            );
          } else {
            return item[rowTitleKey]
              ?.toLowerCase()
              ?.includes(txt?.toLowerCase());
          }
        }),
      );
      setSearchText(txt);
    };
    const onDonePress = () => {
      onDone(selectedData.length === 1 ? selectedData[0] : selectedData);
      setSelectedData([]);
    };

    const onSelectAllPress = () => {
      if (!allSelected) {
        setSelectedData([...data]);
        setAllSelected(true);
      } else {
        setSelectedData([]);
        setAllSelected(false);
      }
    };
    const onItemPress = (item: any, isAdded: boolean) => {
      let allData = [...selectedData];
      if (type === 'single') {
        setSelectedData([item]);
      } else {
        if (isAdded) {
          allData = allData.filter(
            el => el[rowUniqueKey] !== item[rowUniqueKey],
          );
        } else {
          allData.push(item);
        }
        setSelectedData(allData);

        if (allData?.length === data?.length) {
          setAllSelected(true);
        } else {
          setAllSelected(false);
        }
      }
    };

    return (
      <Modal
        visible={show}
        animationType={'slide'}
        transparent={true}
        onRequestClose={onClose}>
        <SafeAreaView style={styles.safearea}>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <Text style={styles.pickerTitleText}>{pickerTitle}</Text>
              {enableSearch && (
                <SearchBar
                  value={searchText}
                  placeholder={searchPlaceholder}
                  onChangeText={onChangeText}
                  onClear={() => setSearchText('')}
                />
              )}
              <View style={styles.devider} />
              <View>
                {type === 'multiple' && (
                  <CheckBox
                    onPress={onSelectAllPress}
                    isChecked={allSelected}
                    title={'Select All'}
                  />
                )}
                <View style={styles.devider} />
              </View>
              <View style={styles.listView}>
                <FlatList
                  ref={listRef}
                  data={searchText === '' ? data : searchData}
                  ListEmptyComponent={() => {
                    return (
                      <View style={styles.emptyView}>
                        <Text style={styles.emptyTitleText}>{emptyTitle}</Text>
                      </View>
                    );
                  }}
                  renderItem={({item}) => {
                    const active = selectedData?.some(
                      e => e[rowUniqueKey] === item[rowUniqueKey],
                    );
                    return (
                      <React.Fragment key={item[rowUniqueKey]}>
                        <CheckBox
                          onPress={() => onItemPress(item, active)}
                          isChecked={active}
                          title={`${item[rowTitleKey]}${
                            extraTitleSymbol && extraTitleSymbol
                          }${extraTitleKey && item[extraTitleKey]}`}
                        />
                        <View style={styles.devider} />
                      </React.Fragment>
                    );
                  }}
                  // snapToInterval={SIZE.S_54}
                  decelerationRate="normal"
                  viewabilityConfig={{
                    itemVisiblePercentThreshold: 50, // Adjust as needed
                  }}
                  onScrollToIndexFailed={info => {
                    if (type === 'single') {
                      const wait = new Promise(resolve =>
                        setTimeout(resolve, 500),
                      );
                      wait.then(() => {
                        listRef.current?.scrollToIndex({
                          index: info.index,
                          animated: true,
                          viewPosition: 0.5,
                        });
                      });
                    }
                  }}
                  keyExtractor={item => item[rowUniqueKey]}
                />
              </View>
            </View>
          </View>

          <View style={styles.devider} />

          <View style={styles.buttonsRow}>
            <Buttons title={'Close'} onPress={onClose} type={'close'} />
            <Buttons title={'Done'} onPress={onDonePress} type={'done'} />
          </View>
        </SafeAreaView>
        <SafeAreaView style={styles.bottomSafearea} />
      </Modal>
    );
  }, [
    show,
    data,
    type,
    pickerTitle,
    rowUniqueKey,
    rowTitleKey,
    extraTitleKey,
    extraTitleSymbol,
    onClose,
    onDone,
    searchText,
    searchData,
    selectedData,
    allSelected,
  ]);
};

const styles = StyleSheet.create({
  emptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 110,
  },
  emptyTitleText: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: COLORS.TITLE,
  },
  rowTitleText: {
    fontWeight: '400',
    fontSize: 17,
    color: COLORS.TITLE,
    marginLeft: 15,
  },
  check: {
    height: 22,
    width: 22,
  },
  listView: {marginBottom: 110},
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 15,
  },
  devider: {
    height: 1,
    backgroundColor: COLORS.DEVIDER,
  },
  buttonsRow: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    backgroundColor: COLORS.WHITE,
  },
  pickerTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.PRIMARY,
    marginBottom: 15,
  },
  safearea: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
  },
  bottomSafearea: {
    backgroundColor: COLORS.WHITE,
    flex: 0,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.RGBA,
    justifyContent: 'flex-end',
  },
  innerContainer: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: 15,
    paddingHorizontal: 5,
    maxHeight: '80%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default MultipleSelection;
