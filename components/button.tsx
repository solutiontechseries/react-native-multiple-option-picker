import React from 'react';
import {Text, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';
import {COLORS} from '../utils/values';
import {ButtonProps} from '../utils/props-type';

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
    justifyContent: 'center',
    alignItems: 'center',
  };

  const baseTitle: TextStyle = {
    fontSize: 16,
    fontWeight: '600',
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
      style={[styles.baseButton, styles[type].button]}>
      <Text style={[styles.baseTitle, styles[type].title]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;
