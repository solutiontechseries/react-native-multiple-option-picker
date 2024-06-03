import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {IMAGES} from '../assets';
import {SearchBarProps} from '../utils/props-type';
import { COLORS } from '../utils/values';

const SearchBar: React.FC<SearchBarProps> = ({
  value,placeholder,
  onChangeText,
  onClear,
}) => {
  return (
    <View style={styles.inputOuterView}>
      <Image source={IMAGES.SEARCH} style={styles.searchIcon} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.inputView}
        placeholder={placeholder}
      />
      {value !== '' && (
        <TouchableOpacity
          activeOpacity={0.65}
          onPress={onClear}
          style={styles.closeButtonView}>
          <Image style={styles.closeIcon} source={IMAGES.CLOSE} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  closeButtonView: {
    width: 35,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontWeight: '500',
    color: '#222222',
    paddingHorizontal: 15,
  },
  inputOuterView: {
    height: 48,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: COLORS.PLACEHOLDER,
    margin: 15,
    marginHorizontal: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
