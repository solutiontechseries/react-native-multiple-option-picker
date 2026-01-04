/*
 @ 𝔸𝕦𝕥𝕙𝕠𝕣: ℙ𝕒𝕟𝕜𝕒𝕛 𝕂𝕦𝕞𝕒𝕣 ℙ𝕣𝕒𝕛𝕒𝕡𝕒𝕥𝕚
 @ 𝔽𝕚𝕝𝕖 ℕ𝕒𝕞𝕖: index.tsx
 @ ℂ𝕠𝕡𝕪𝕣𝕚𝕘𝕙𝕥 (𝕔) 2026 𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕋𝕖𝕔𝕙𝕊𝕖𝕣𝕚𝕖𝕤
 @ ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝕆𝕟: Sun Jan 04 2026
 */
import { ColorValue } from 'react-native';

export interface PickerProps {
  show: boolean;
  type: 'single' | 'multiple';
  emptyTitle: string,
  enableSearch: boolean,
  searchPlaceholder: string,
  searchPlaceholderTextColor?: ColorValue,
  isCapsTitle?: boolean,
  pickerTitle: string;
  value: string | Object | any[];
  data: any[];
  pickerColor?: ColorValue | undefined;
  rowUniqueKey: string;
  rowTitleKey: string;
  extraTitleSymbol?: '' | string;
  extraTitleKey?: '' | string;
  onDone: (data: any) => void;
  onClose: () => void;
}
export type ButtonProps = {
  title: string;
  type: 'done' | 'close';
  onPress: () => void;
  pickerColor: ColorValue
};
export type SearchBarProps = {
  value: string;
  placeholder: string;
  searchPlaceholderTextColor?: ColorValue,
  onChangeText: (txt: string) => void;
  onClear: () => void;
};

export type CheckBoxProps = {
  title: string,
  onPress: () => void,
  isChecked: boolean,
  pickerColor: ColorValue
  isCapsTitle?: boolean,
}