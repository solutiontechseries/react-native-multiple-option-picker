/*
 @ 𝔸𝕦𝕥𝕙𝕠𝕣: ℙ𝕒𝕟𝕜𝕒𝕛 𝕂𝕦𝕞𝕒𝕣 ℙ𝕣𝕒𝕛𝕒𝕡𝕒𝕥𝕚
 @ 𝔽𝕚𝕝𝕖 ℕ𝕒𝕞𝕖: index.tsx
 @ ℂ𝕠𝕡𝕪𝕣𝕚𝕘𝕙𝕥 (𝕔) 2026 𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕋𝕖𝕔𝕙𝕊𝕖𝕣𝕚𝕖𝕤
 @ ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝕆𝕟: Sun Jan 04 2026
 */
import React from "react";
import { Text, TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import { COLORS } from "../utils/values";
import { ButtonProps } from "../utils/props-type";

const Buttons: React.FC<ButtonProps> = ({
  onPress,
  title,
  type,
  pickerColor,
}) => {
  const baseButton: ViewStyle = {
    height: 48,
    width: 100,
    borderRadius: 6,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  };

  const baseTitle: TextStyle = {
    fontSize: 16,
    fontWeight: "600",
  };

  const styles = {
    baseButton: {
      ...baseButton,
    },
    baseTitle: {
      ...baseTitle,
    },
    done: {
      title: {
        ...baseTitle,
        color: COLORS.WHITE,
      },
      button: {
        ...baseButton,
        borderColor: COLORS.WHITE,
        backgroundColor: pickerColor ?? COLORS.PRIMARY,
      },
    },
    close: {
      title: {
        ...baseTitle,
        color: pickerColor ?? COLORS.PRIMARY,
      },
      button: {
        ...baseButton,
        borderColor: pickerColor ?? COLORS.PRIMARY,
        backgroundColor: COLORS.WHITE,
      },
    },
  };
  return (
    <TouchableOpacity
      activeOpacity={0.65}
      onPress={onPress}
      style={[styles.baseButton, styles[type].button]}
    >
      <Text style={[styles.baseTitle, styles[type].title]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;
