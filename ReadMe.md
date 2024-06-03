# react-native-multiple-option-picker

Introducing React Native Multiple Selection: effortlessly integrate single and multiple selection modes into your app's lists. Enjoy a customizable UI, smooth interactions, and comprehensive documentation. Upgrade your React Native app's user experience today!

## Examples

<p align="left">
  <img width=220 title="Screenshot-1" src="https://github.com/solutiontechseries/react-native-multiple-option-picker/blob/master/assets/screenshot-1.png">
  <img width=220 title="Screenshot-2" src="https://github.com/solutiontechseries/react-native-multiple-option-picker/blob/master/assets/screenshot-2.png">
</p>

# Install

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
import MultipleSelection from "react-native-multiple-option-picker";
```

Create required state variables

```javascript
const [data, setData] = useState([]);
const [selectedValue, setSelectedValue] = useState("");
const [showPicker, setShowPicker] = useState(false);
```

Usage of the multiple value picker

```javascript
<View>
  <Button title={"Show Country Picker"} onPress={() => setShowPicker(true)} />

  <MultipleSelection
    show={showPicker}
    data={data}
    value={selectedValue}
    type={"multiple"}
    onDone={(values) => {
      setShowPicker(false);
      setSelectedValue(values);
    }}
    pickerTitle={"Country"}
    onClose={() => setShowPicker(false)}
    rowUniqueKey={"id"}
    rowTitleKey={"name"}
  />
</View>
```
