# react-native-multiple-option-picker

Introducing React Native Multiple Selection: effortlessly integrate single and multiple selection modes into your app's lists. Enjoy a customizable UI, smooth interactions, and comprehensive documentation. Upgrade your React Native app's user experience today!

# MultipleSelection React Native Library

A customizable and reusable multiple selection modal component for React Native, allowing users to select items from a list, with search and checkbox options.

## Features

- Single and multiple selection options.
- Built-in search functionality.
- Customizable titles, colors, and placeholders.
- Select All option for multiple selections.
- Smooth scrolling to selected items.

## Examples

<p align="left">
  <img width=220 title="Screenshot-1" src="https://github.com/solutiontechseries/react-native-multiple-option-picker/blob/master/assets/screenshot-1.png">
  <img width=220 title="Screenshot-2" src="https://github.com/solutiontechseries/react-native-multiple-option-picker/blob/master/assets/screenshot-2.png">
</p>

## Installation

## Step 1

```bash
npm i react-native-multiple-option-picker --save
```

or

```bash
yarn add react-native-multiple-option-picker
```

## Step 2

### iOS

```bash
cd ios
pod install
```

## Usage

Import library

```javascript
import React, { useState } from "react";
import MultipleSelection from "react-native-multiple-option-picker";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    // Add more items here
  ];

  const handleDone = (selected) => {
    setSelectedItems(selected);
    setShowModal(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Show Picker" onPress={() => setShowModal(true)} />
      <MultipleSelection
        show={showModal}
        type="multiple"
        data={data}
        rowTitleKey="name"
        rowUniqueKey="id"
        value={selectedItems}
        pickerTitle="Select Items"
        onDone={handleDone}
        onClose={() => setShowModal(false)}
      />
    </View>
  );
};
```

## Props

| Prop                         | Type                     | Default                | Description                                                           |
| ---------------------------- | ------------------------ | ---------------------- | --------------------------------------------------------------------- |
| `show`                       | `boolean`                | `false`                | Controls the visibility of the modal.                                 |
| `type`                       | `'single' \| 'multiple'` | `'single'`             | Specifies the selection type, either `single` or `multiple`.          |
| `emptyTitle`                 | `string`                 | `"No Record(s) Found"` | Message shown when no items are available in the list.                |
| `enableSearch`               | `boolean`                | `true`                 | Enables or disables the search bar in the modal.                      |
| `searchPlaceholder`          | `string`                 | `"Search here"`        | Placeholder text for the search input.                                |
| `searchPlaceholderTextColor` | `ColorValue`             | `'#b1b1b1'`            | Custom color for the search placeholder text.                         |
| `isCapsTitle`                | `boolean`                | `false`                | If `true`, the item titles are displayed in uppercase.                |
| `pickerTitle`                | `string`                 | `""`                   | Title of the picker displayed at the top.                             |
| `value`                      | `string  \| any[]`       | `""`                   | The current selected item(s), can be a empty string, or array.        |
| `data`                       | `any[]`                  | `[]`                   | The list of items to display in the modal.                            |
| `pickerColor`                | `ColorValue`             | `'#8902b3'`            | Custom color for the picker and text.                                 |
| `rowUniqueKey`               | `string`                 | `""`                   | The unique key in your data for each item.                            |
| `rowTitleKey`                | `string`                 | `""`                   | The key in your data that holds the title to be displayed.            |
| `extraTitleSymbol`           | `string \| ''`           | `""`                   | A symbol to append after each title (optional).                       |
| `extraTitleKey`              | `string \| ''`           | `""`                   | An additional key for showing extra text in the row title (optional). |
| `onDone`                     | `(data: any) => void`    | `()`                   | Callback function when the user finishes selecting items.             |
| `onClose`                    | `() => void`             | `()`                   | Callback function when the modal is closed.                           |
