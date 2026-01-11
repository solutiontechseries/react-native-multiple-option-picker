/*
 @ 𝔸𝕦𝕥𝕙𝕠𝕣: ℙ𝕒𝕟𝕜𝕒𝕛 𝕂𝕦𝕞𝕒𝕣 ℙ𝕣𝕒𝕛𝕒𝕡𝕒𝕥𝕚
 @ 𝔽𝕚𝕝𝕖 ℕ𝕒𝕞𝕖: MultipleOptionPicker.tsx
 @ ℂ𝕠𝕡𝕪𝕣𝕚𝕘𝕙𝕥 (𝕔) 2026 𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕋𝕖𝕔𝕙𝕊𝕖𝕣𝕚𝕖𝕤
 @ ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝕆𝕟: Mon Jan 05 2026
 */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 4
  },
  selectedItem: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF'
  },
  disabledItem: {
    opacity: 0.5
  },
  itemText: {
    color: '#333'
  },
  selectedItemText: {
    color: '#fff'
  }
});