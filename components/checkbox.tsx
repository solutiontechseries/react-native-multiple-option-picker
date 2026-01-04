/*
 @ 𝔸𝕦𝕥𝕙𝕠𝕣: ℙ𝕒𝕟𝕜𝕒𝕛 𝕂𝕦𝕞𝕒𝕣 ℙ𝕣𝕒𝕛𝕒𝕡𝕒𝕥𝕚
 @ 𝔽𝕚𝕝𝕖 ℕ𝕒𝕞𝕖: index.tsx
 @ ℂ𝕠𝕡𝕪𝕣𝕚𝕘𝕙𝕥 (𝕔) 2026 𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕋𝕖𝕔𝕙𝕊𝕖𝕣𝕚𝕖𝕤
 @ ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝕆𝕟: Sun Jan 04 2026
 */
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CheckBoxProps } from "../utils/props-type";
import { COLORS } from "../utils/values";

export const CheckBox: React.FC<CheckBoxProps> = ({
  title,
  onPress,
  isChecked,
  pickerColor,
  isCapsTitle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.65}
      onPress={onPress}
      style={styles.rowView}
    >
      <View
        style={[
          styles.check,
          {
            borderColor: isChecked
              ? pickerColor ?? COLORS.PRIMARY
              : COLORS.TITLE,
          },
        ]}
      >
        {isChecked && (
          <View
            style={[
              styles.circle,
              {
                backgroundColor: pickerColor ?? COLORS.PRIMARY,
              },
            ]}
          />
        )}
      </View>
      <Text
        style={[
          styles.rowTitleText,
          { color: isChecked ? pickerColor ?? COLORS.PRIMARY : COLORS.TITLE },
        ]}
      >
        {isCapsTitle ? title?.toString()?.toUpperCase() : title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rowTitleText: {
    fontWeight: "400",
    fontSize: 17,
    color: COLORS.TITLE,
    marginLeft: 15,
  },
  check: {
    height: 25,
    width: 25,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    height: 13,
    width: 13,
    borderRadius: 15,
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 15,
  },
});
