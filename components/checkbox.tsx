import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CheckBoxProps} from '../utils/props-type';
import {IMAGES} from '../assets';
import {COLORS} from '../utils/values';

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
      style={styles.rowView}>
      <View
        style={[
          styles.check,
          {
            borderColor: isChecked
              ? pickerColor ?? COLORS.PRIMARY
              : COLORS.TITLE,
          },
        ]}>
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
          {color: isChecked ? pickerColor ?? COLORS.PRIMARY : COLORS.TITLE},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rowTitleText: {
    fontWeight: '400',
    fontSize: 17,
    color: COLORS.TITLE,
    marginLeft: 15,
  },
  check: {
    height: 25,
    width: 25,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    height: 13,
    width: 13,
    borderRadius: 15,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 15,
  },
});
