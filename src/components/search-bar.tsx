/*
 @ 𝔸𝕦𝕥𝕙𝕠𝕣: ℙ𝕒𝕟𝕜𝕒𝕛 𝕂𝕦𝕞𝕒𝕣 ℙ𝕣𝕒𝕛𝕒𝕡𝕒𝕥𝕚
 @ 𝔽𝕚𝕝𝕖 ℕ𝕒𝕞𝕖: MultipleOptionPicker.tsx
 @ ℂ𝕠𝕡𝕪𝕣𝕚𝕘𝕙𝕥 (𝕔) 2026 𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕋𝕖𝕔𝕙𝕊𝕖𝕣𝕚𝕖𝕤
 @ ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝕆𝕟: Mon Jan 05 2026
 */
import React, { memo } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { IMAGES } from "../assets/images";
import { SearchBarProps } from "../types";
import { COLORS } from "../utils/values";

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  placeholder,
  searchPlaceholderTextColor = COLORS.PLACEHOLDER,
  onChangeText,
  onClear,
}) => {
  return (
    <View style={styles.inputOuterView}>
      <Image source={IMAGES.SEARCH} style={styles.searchIcon} />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={searchPlaceholderTextColor}
        style={styles.inputView}
        placeholder={placeholder}
      />

      {value !== "" && (
        <TouchableOpacity
          activeOpacity={0.65}
          onPress={onClear}
          style={styles.closeButtonView}
        >
          <Image style={styles.closeIcon} source={IMAGES.CLOSE} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default memo(SearchBar);

const styles = StyleSheet.create({
  closeButtonView: {
    width: 35,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: {
    height: 16,
    width: 16,
    tintColor: COLORS.TITLE,
  },
  searchIcon: {
    height: 20,
    width: 20,
    tintColor: COLORS.PLACEHOLDER,
  },
  inputView: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: "#222222",
    paddingHorizontal: 15,
  },
  inputOuterView: {
    height: 48,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLORS.PLACEHOLDER,
    margin: 15,
    marginHorizontal: 10,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
