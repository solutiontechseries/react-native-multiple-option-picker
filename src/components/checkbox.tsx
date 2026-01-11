/*
 @ 𝔸𝕦𝕥𝕙𝕠𝕣: ℙ𝕒𝕟𝕜𝕒𝕛 𝕂𝕦𝕞𝕒𝕣 ℙ𝕣𝕒𝕛𝕒𝕡𝕒𝕥𝕚
 @ 𝔽𝕚𝕝𝕖 ℕ𝕒𝕞𝕖: MultipleOptionPicker.tsx
 @ ℂ𝕠𝕡𝕪𝕣𝕚𝕘𝕙𝕥 (𝕔) 2026 𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕋𝕖𝕔𝕙𝕊𝕖𝕣𝕚𝕖𝕤
 @ ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝕆𝕟: Mon Jan 05 2026
 */
import React, { useMemo } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
  Image,
} from "react-native";
import { CheckBoxProps } from "../types";
import { COLORS } from "../utils/values";
import { IMAGES } from "../assets/images";

export const CheckBox: React.FC<CheckBoxProps> = ({
  title,
  onPress,
  isChecked,
  pickerColor,
  isCapsTitle,
  checkType,
}) => {
  const dynamicStyles = useMemo<{
    check: ViewStyle;
    circle: ViewStyle;
    title: TextStyle;
  }>(() => {
    const activeColor = pickerColor ?? COLORS.PRIMARY;

    return {
      check: {
        borderColor: isChecked ? activeColor : COLORS.TITLE,
      },
      circle: {
        backgroundColor: activeColor,
      },
      title: {
        color: isChecked ? activeColor : COLORS.TITLE,
      },
    };
  }, [isChecked, pickerColor]);

  return (
    <TouchableOpacity
      activeOpacity={0.65}
      onPress={onPress}
      style={styles.rowView}
    >
      {checkType === "radio" ? (
        <View style={[styles.check, dynamicStyles.check]}>
          {isChecked && <View style={[styles.circle, dynamicStyles.circle]} />}
        </View>
      ) : (
        <Image
          source={isChecked ? IMAGES.CHECK : IMAGES.UNCHECK}
          style={[
            styles.checkImage,
            isChecked && { tintColor: pickerColor ?? COLORS.PRIMARY },
          ]}
        />
      )}

      <Text style={[styles.rowTitleText, dynamicStyles.title]}>
        {isCapsTitle ? title?.toString()?.toUpperCase() : title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rowTitleText: {
    fontWeight: "400",
    fontSize: 17,
    marginLeft: 15,
  },
  checkImage: {
    height: 25,
    width: 25,
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
