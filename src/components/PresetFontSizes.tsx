import * as React from 'react';
import {
  NativeSyntheticEvent,
  Platform,
  Text,
  TextLayoutEventData,
} from 'react-native';

import { AutoSizeTextProps } from '../types';

const PresetFontSizes = (props: AutoSizeTextProps) => {
  const { fontSizePresets, children, style, numberOfLines } = props;
  const [currentFont, setCurrentFont] = React.useState<number>(
    fontSizePresets![0] as number
  );
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleResizing = (e: NativeSyntheticEvent<TextLayoutEventData>) => {
    const { lines } = e.nativeEvent;
    if (lines.length > (numberOfLines as number)) {
      if (currentIndex < fontSizePresets!.length - 1) {
        const updatedIndex = currentIndex + 1;
        setCurrentIndex(updatedIndex);
        setCurrentFont(fontSizePresets![updatedIndex]);
      }
    }
  };

  const handleNumberOfLines = () => {
    if (
      (Platform.OS === 'ios' && currentIndex === fontSizePresets!.length - 1) ||
      Platform.OS === 'android'
    ) {
      return numberOfLines;
    }
  };

  return (
    <Text
      numberOfLines={handleNumberOfLines()}
      style={[
        style,
        {
          fontSize: currentFont,
        },
      ]}
      onTextLayout={handleResizing}
    >
      {children}
    </Text>
  );
};

export default PresetFontSizes;
