/*
 @ 𝔸𝕦𝕥𝕙𝕠𝕣: ℙ𝕒𝕟𝕜𝕒𝕛 𝕂𝕦𝕞𝕒𝕣 ℙ𝕣𝕒𝕛𝕒𝕡𝕒𝕥𝕚
 @ 𝔽𝕚𝕝𝕖 ℕ𝕒𝕞𝕖: MultipleOptionPicker.tsx
 @ ℂ𝕠𝕡𝕪𝕣𝕚𝕘𝕙𝕥 (𝕔) 2026 𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕋𝕖𝕔𝕙𝕊𝕖𝕣𝕚𝕖𝕤
 @ ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝕆𝕟: Mon Jan 05 2026
 */
import type { ColorValue } from "react-native";

/**
 * Common record type for picker items
 * (kept as any-compatible to avoid breaking users)
 */
export type PickerItem = Record<string, any>;

export interface PickerProps {
  show: boolean;
  type: "single" | "multiple";

  checkType?: 'radio' | 'checkbox';

  pickerTitle: string;
  emptyTitle: string;

  enableSearch: boolean;
  searchPlaceholder: string;
  searchPlaceholderTextColor?: ColorValue;

  isCapsTitle?: boolean;

  /**
   * For:
   * - single → object
   * - multiple → array
   * Keeping union to avoid breaking changes
   */
  value: PickerItem | PickerItem[] | string;

  data: PickerItem[];

  rowUniqueKey: string;
  rowTitleKey: string;

  extraTitleSymbol?: string;
  extraTitleKey?: string;

  pickerColor?: ColorValue;

  onDone: (data: PickerItem | PickerItem[]) => void;
  onClose: () => void;
}

export type ButtonProps = {
  title: string;
  type: "done" | "close";
  onPress: () => void;
  pickerColor?: ColorValue;
};

export type SearchBarProps = {
  value: string;
  placeholder: string;
  searchPlaceholderTextColor?: ColorValue;
  onChangeText: (txt: string) => void;
  onClear: () => void;
};

export type CheckBoxProps = {
  title?: string;
  onPress: () => void;
  checkType?: 'radio' | 'checkbox';
  isChecked: boolean;
  pickerColor?: ColorValue;
  isCapsTitle?: boolean;
};