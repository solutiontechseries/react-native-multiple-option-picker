/*
 @ 𝔸𝕦𝕥𝕙𝕠𝕣: ℙ𝕒𝕟𝕜𝕒𝕛 𝕂𝕦𝕞𝕒𝕣 ℙ𝕣𝕒𝕛𝕒𝕡𝕒𝕥𝕚
 @ 𝔽𝕚𝕝𝕖 ℕ𝕒𝕞𝕖: MultipleOptionPicker.tsx
 @ ℂ𝕠𝕡𝕪𝕣𝕚𝕘𝕙𝕥 (𝕔) 2026 𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕋𝕖𝕔𝕙𝕊𝕖𝕣𝕚𝕖𝕤
 */

import React, { useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Modal, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Buttons from "./buttons";
import { CheckBox } from "./checkbox";
import SearchBar from "./search-bar";
import { PickerProps } from "../types";
import { COLORS } from "../utils/values";

const MultipleSelection: React.FC<PickerProps> = ({
  show,
  type,
  checkType = "radio",
  enableSearch = true,
  isCapsTitle = false,
  searchPlaceholder = "Search here",
  isOneTapSelection = false,
  searchPlaceholderTextColor,
  pickerTitle,
  emptyTitle = "No Record(s) Found",
  data,
  value,
  rowTitleKey,
  rowUniqueKey,
  extraTitleSymbol = "",
  extraTitleKey = "",
  onDone,
  onClose,
  pickerColor,
}) => {
  const [selectedData, setSelectedData] = useState<any[] | any>([]);
  const [searchData, setSearchData] = useState<any[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [allSelected, setAllSelected] = useState<boolean>(false);

  const listRef = useRef<FlatList<any> | null>(null);

  useEffect(() => {
    if (value !== "" && show && type === "single") {
      setSelectedData(value);

      const index = data?.findIndex(
        (item) => item[rowUniqueKey] == value?.[rowUniqueKey],
      );

      if (index > -1) {
        listRef.current?.scrollToIndex({
          index,
          animated: true,
          viewPosition: 0.5,
        });
      }
    } else if (
      value !== "" &&
      show &&
      type === "multiple" &&
      value?.length > 0
    ) {
      if (value !== "" && Array.isArray(value)) {
        setSelectedData(
          data?.filter((e) =>
            value?.some((item) => item[rowUniqueKey] === e[rowUniqueKey]),
          ) || [],
        );
      }
    }

    setAllSelected(selectedData?.length === data?.length);

    return () => {
      setSearchText("");
      setSearchData([]);
    };
  }, [show, value]);

  useEffect(() => {
    setAllSelected(selectedData?.length === data?.length);
  }, [selectedData]);

  return useMemo(() => {
    const onChangeText = (txt: string) => {
      const lowerText = txt.toLowerCase();

      setSearchData(
        data.filter((item) => {
          const mainTitle = item[rowTitleKey]?.toString().toLowerCase() || "";
          const extraTitle = extraTitleKey
            ? item[extraTitleKey]?.toString().toLowerCase() || ""
            : "";

          return (
            mainTitle.includes(lowerText) || extraTitle.includes(lowerText)
          );
        }),
      );

      setSearchText(txt);
    };

    const onClosed = () => {
      setSelectedData([]);
      onClose();
    };

    const onDonePress = () => {
      if (selectedData?.length <= 0) {
        setSelectedData([]);
        onClosed();
      } else {
        onDone(selectedData);
        setSelectedData([]);
      }
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
      if (isOneTapSelection && type === "single") {
        onDone([item]);
        onClose?.();
        return;
      }
      if (type === "single") {
        setSelectedData([item]);
        return;
      }

      let allData = [...selectedData];

      if (isAdded) {
        allData = allData.filter(
          (el) => el[rowUniqueKey] !== item[rowUniqueKey],
        );
      } else {
        allData.push(item);
      }

      setSelectedData(allData);
      setAllSelected(allData.length === data.length);
    };

    const showListData = searchText === "" ? data : searchData;

    return (
      <Modal
        visible={show}
        animationType="slide"
        transparent
        onRequestClose={onClose}
      >
        <SafeAreaView style={styles.safearea}>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <View style={styles.buttonsRow}>
                <Buttons
                  title="Cancel"
                  onPress={onClosed}
                  type="close"
                  pickerColor={pickerColor}
                />
                <Text
                  style={[
                    styles.pickerTitleText,
                    pickerColor && { color: pickerColor },
                  ]}
                >
                  {pickerTitle}
                </Text>
                <Buttons
                  title="Done"
                  onPress={onDonePress}
                  type="done"
                  pickerColor={pickerColor}
                />
              </View>

              <View style={styles.devider} />

              {enableSearch && (
                <SearchBar
                  value={searchText}
                  placeholder={searchPlaceholder}
                  searchPlaceholderTextColor={searchPlaceholderTextColor}
                  onChangeText={onChangeText}
                  onClear={() => setSearchText("")}
                />
              )}

              {type === "multiple" && showListData?.length > 0 && (
                <>
                  <CheckBox
                    onPress={onSelectAllPress}
                    isChecked={allSelected}
                    title="Select All"
                    pickerColor={pickerColor}
                    checkType={"radio"}
                  />
                  <View style={styles.devider} />
                </>
              )}

              <View style={styles.listView}>
                <FlatList
                  ref={listRef}
                  data={showListData}
                  contentContainerStyle={{ paddingBottom: 100 }}
                  keyExtractor={(item) => item[rowUniqueKey]}
                  renderItem={({ item }) => {
                    const active = selectedData?.some(
                      (e) => e[rowUniqueKey] === item[rowUniqueKey],
                    );

                    return (
                      <React.Fragment key={item[rowUniqueKey]}>
                        <CheckBox
                          onPress={() => onItemPress(item, active)}
                          isChecked={active}
                          checkType={checkType}
                          pickerColor={pickerColor}
                          isCapsTitle={isCapsTitle}
                          title={`${item[rowTitleKey]}${extraTitleSymbol}${
                            extraTitleKey ? item[extraTitleKey] : ""
                          }`}
                        />
                        <View style={styles.devider} />
                      </React.Fragment>
                    );
                  }}
                  ListEmptyComponent={() => (
                    <View style={styles.emptyView}>
                      <Text style={styles.emptyTitleText}>{emptyTitle}</Text>
                    </View>
                  )}
                  decelerationRate="normal"
                  viewabilityConfig={{
                    itemVisiblePercentThreshold: 50,
                  }}
                  onScrollToIndexFailed={(info) => {
                    if (type === "single") {
                      setTimeout(() => {
                        listRef.current?.scrollToIndex({
                          index: info.index,
                          animated: true,
                          viewPosition: 0.5,
                        });
                      }, 500);
                    }
                  }}
                />
              </View>
            </View>
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 110,
  },
  emptyTitleText: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    color: COLORS.TITLE,
  },
  listView: { marginBottom: 110 },
  devider: {
    height: 1,
    backgroundColor: COLORS.DEVIDER,
    marginHorizontal: 10,
  },
  buttonsRow: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.WHITE,
  },
  pickerTitleText: {
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
    color: COLORS.PRIMARY,
    flex: 1,
  },
  safearea: { flex: 1 },
  bottomSafearea: {
    backgroundColor: COLORS.WHITE,
    flex: 0,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.RGBA,
    justifyContent: "flex-end",
  },
  innerContainer: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: 15,
    paddingTop: 5,
    paddingHorizontal: 5,
    maxHeight: "80%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default MultipleSelection;
