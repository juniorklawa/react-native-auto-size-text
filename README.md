Welcome file
Welcome file
<p align="center">
    <img alt="react-native-elements" src="https://images.emojiterra.com/twitter/v13.0/512px/1f521.png" width="256">
</p>

<h1 align="center"> React Native Auto Text Size</h1>
<p align="center">
 React Native component that provides several ways to resize text within a certain dimension/parent.
</p>
<p align="center">
Port of <a href="https://pub.dev/packages/auto_size_text"> auto_size_text </>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-auto-size-text"><img src="https://img.shields.io/npm/v/react-native-auto-size-text.svg"></a>
  <a href="https://github.com/juniorklawa/react-native-auto-size-text"><img src="https://img.shields.io/github/stars/juniorklawa/react-native-auto-size-text"></a>
  <a href="https://www.npmjs.com/package/react-native-auto-size-text"><img src="https://img.shields.io/npm/dm/react-native-auto-size-text.svg"></a>
    <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
</p>
<br />


<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Getting Started](#getting-started)
* [Installation](#installation)
* [Usage](#usage)
* [Examples](#installation)
* [Contributing](#contributing)
* [To-do](#acknowledgements)

<!-- GETTING STARTED -->
## Getting Started

### Installation
#### Yarn
```sh
yarn react-native-auto-size-text
```
#### npm
```sh
npm i react-native-auto-size-text
```

<!-- USAGE -->
## Usage

Import `react-native-auto-size-text` and `ResizeTextMode`
```javascript
import { AutoSizeText, ResizeTextMode } from 'react-native-auto-size-text';
```
Choose one of the modes below:

#### MaxLines
Required props: `fontSize`, `numberOfLines` and `mode`.
```jsx
<AutoSizeText
	fontSize={32}
	numberOfLines={2}
	mode={ResizeTextMode.MaxLines}>
	This string will be automatically resized to fit on two lines.
</AutoSizeText>
```

#### MinFontSize
Required props: `minFontSize`, `numberOfLines` and `mode`.
```jsx
<AutoSizeText
	numberOfLines={4}
	minFontSize={20}
	mode={ResizeTextMode.MinFontSize}>
	This string's size will not be smaller than 20. It will be automatically 
	resized to fit on 4 lines.
</AutoSizeText>
```

#### Group
Required props:  `mode`.
```jsx
<AutoSizeText
	mode={ResizeTextMode.Group}>
	This mode will fit the available space and sync their text size
</AutoSizeText>
```

#### StepGranularity
Required props: `fontSize`, `numberOfLines`, `granularity` and `mode`.
```jsx
<AutoSizeText
	fontSize={48}
	numberOfLines={2}
	granularity={10}
	mode={ResizeTextMode.StepGranularity}>
	This String changes its size with a stepGranularity of 10. It will be automatically 
	resized to fit on 4 lines.
</AutoSizeText>
```
#### PresetFontSizes
Required props: `fontSizePresets`, `numberOfLines` and `mode`.
```jsx
<AutoSizeText
	fontSizePresets={[50,  30,  10]}
	numberOfLines={4}
	mode={ResizeTextMode.PresetFontSizes}>
	This String has only three allowed sizes: 50, 30 and 10. 
	It will be automatically resized to fit on 4 lines. 
	With this setting, you have most control
</AutoSizeText>
```

#### OverflowReplacement
Required props: `fontSize`, `numberOfLines`, `overFlowReplacement` and `mode`.
```jsx
<AutoSizeText
	fontSize={20}
	numberOfLines={1}
	overFlowReplacement={'Text overflowing'}
	mode={ResizeTextMode.OverflowReplacement}>
	This String's size will not be smaller than 20. 
	It will be automatically resized to fit on 1 lines. 
	Otherwise it will be replaced by a replacement string. Here's an example.
</AutoSizeText>
```

<!-- example -->
## Example with all modes
```jsx
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {AutoSizeText, ResizeTextMode} from 'react-native-auto-size-text';

const App = () => {
  const [text, setText] = useState<string>('');

  return (
    <ScrollView
      style={styles.scrollViewContainer}
      contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={e => setText(e)}
        value={text}
      />

      <Text>MaxLines</Text>

      <View style={styles.textWrapper}>
        <AutoSizeText
          fontSize={64}
          numberOfLines={2}
          mode={ResizeTextMode.max_lines}>
          {text}
        </AutoSizeText>
      </View>

      <Text>MinFontSize</Text>
      <View style={styles.textWrapper}>
        <AutoSizeText
          numberOfLines={3}
          minFontSize={18}
          mode={ResizeTextMode.min_font_size}>
          {text}
        </AutoSizeText>
      </View>

      <Text>PresetFontSizes</Text>
      <View style={styles.textWrapper}>
        <AutoSizeText
          fontSizePresets={[50, 30, 10]}
          numberOfLines={3}
          mode={ResizeTextMode.preset_font_sizes}>
          {text}
        </AutoSizeText>
      </View>

      <Text>OverflowReplacement</Text>
      <View style={styles.textWrapper}>
        <AutoSizeText
          fontSize={12}
          numberOfLines={1}
          mode={ResizeTextMode.overflow_replacement}
          overFlowReplacement={'Text overflowing'}>
          {text}
        </AutoSizeText>
      </View>

      <Text>Group</Text>

      <View style={styles.textWrapper}>
        <AutoSizeText mode={ResizeTextMode.group} fontSize={2048}>
          {text}
        </AutoSizeText>
      </View>

      <Text>StepGranularity</Text>
      <View style={styles.textWrapper}>
        <AutoSizeText
          mode={ResizeTextMode.step_granularity}
          fontSize={64}
          numberOfLines={2}
          granularity={10}>
          {text}
        </AutoSizeText>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    borderColor: '#bcbcbc',
    borderRadius: 10,
    width: '80%',
    margin: 16,
    height: 200,
    borderWidth: 2,
  },

  scrollViewContainer: {
    flex: 1,
  },
  input: {
    height: 80,
    width: '100%',
    margin: 12,
    borderWidth: 1,
  },
});

export default App;

```



