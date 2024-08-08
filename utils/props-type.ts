import {ColorValue} from 'react-native';

export interface PickerProps {
  show: boolean;
  type: 'single' | 'multiple';
  emptyTitle:string,
  enableSearch: boolean,
  searchPlaceholder: string,
  pickerTitle: string;
  value: string | Object | any[];
  data: any[];
  pickerColor?: ColorValue | undefined;
  rowUniqueKey: string;
  rowTitleKey: string;
  extraTitleSymbol?: string | '';
  extraTitleKey?: string | '';
  onDone: (data: any) => void;
  onClose: () => void;
}
export type ButtonProps = {
  title: string;
  type: 'done' | 'close';
  onPress: () => void;
  pickerColor:ColorValue
};
export type SearchBarProps = {
  value: string;
  placeholder: string;
  onChangeText: (txt: string) => void;
  onClear: () => void;
};

export type CheckBoxProps = {
  title:string,
  onPress:()=>void,
  isChecked:boolean,
  pickerColor:ColorValue

}