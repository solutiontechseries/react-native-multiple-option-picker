/*
 @ 𝔸𝕦𝕥𝕙𝕠𝕣: ℙ𝕒𝕟𝕜𝕒𝕛 𝕂𝕦𝕞𝕒𝕣 ℙ𝕣𝕒𝕛𝕒𝕡𝕒𝕥𝕚
 @ 𝔽𝕚𝕝𝕖 ℕ𝕒𝕞𝕖: MultipleOptionPicker.tsx
 @ ℂ𝕠𝕡𝕪𝕣𝕚𝕘𝕙𝕥 (𝕔) 2026 𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕋𝕖𝕔𝕙𝕊𝕖𝕣𝕚𝕖𝕤
 */
import React, { useMemo } from "react";
import { Text, TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import { COLORS } from "../utils/values";
import { ButtonProps } from "../types";

const Buttons: React.FC<ButtonProps> = ({
  onPress,
  title,
  type,
  pickerColor,
}) => {
  const styles = useMemo(() => {
    const baseButton: ViewStyle = {
      height: 48,
      width: 90,
      borderRadius: 12,
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
    };

    const baseTitle: TextStyle = {
      fontSize: 16,
      fontWeight: "600",
    };

    return {
      baseButton,
      baseTitle,
      done: {
        title: {
          ...baseTitle,
          color: COLORS.WHITE,
        } as TextStyle,
        button: {
          ...baseButton,
          borderColor: COLORS.WHITE,
          backgroundColor: pickerColor ?? COLORS.PRIMARY,
        } as ViewStyle,
      },
      close: {
        title: {
          ...baseTitle,
          color: pickerColor ?? COLORS.PRIMARY,
        } as TextStyle,
        button: {
          ...baseButton,
          borderColor: pickerColor ?? COLORS.PRIMARY,
          backgroundColor: COLORS.WHITE,
        } as ViewStyle,
      },
    };
  }, [pickerColor]);

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
