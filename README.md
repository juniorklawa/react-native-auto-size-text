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



