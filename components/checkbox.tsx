import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { CheckBoxProps } from "../utils/props-type";
import { IMAGES } from "../assets";
import { COLORS } from "../utils/values";

export const CheckBox: React.FC<CheckBoxProps> = ({
  title,
  onPress,
  isChecked,
  pickerColor,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.65}
      onPress={onPress}
      style={styles.rowView}
    >
      <Image
        source={isChecked ? IMAGES.CHECK : IMAGES.UNCHECK}
        style={[
          styles.check,
          {
            tintColor: isChecked ? pickerColor ?? COLORS.PRIMARY : COLORS.TITLE,
          },
        ]}
      />
      <Text style={styles.rowTitleText}>{title}</Text>
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
    height: 22,
    width: 22,
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 15,
  },
});
