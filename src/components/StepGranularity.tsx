import * as React from 'react';
import {
  NativeSyntheticEvent,
  Platform,
  Text,
  TextLayoutEventData,
} from 'react-native';

import { AutoSizeTextProps } from '../types';

const StepGranularity = (props: AutoSizeTextProps) => {
  const { fontSize, children, style, numberOfLines, granularity } = props;
  const [currentFont, setCurrentFont] = React.useState(fontSize);
  const handleResizing = (e: NativeSyntheticEvent<TextLayoutEventData>) => {
    const { lines } = e.nativeEvent;
    if (lines.length > (numberOfLines as number)) {
      setCurrentFont((currentFont as number) - (granularity as number));
    }
  };

  const handleNumberOfLines = () => {
    if (Platform.OS === 'android') {
      return numberOfLines;
    }
  };

  return (
    <Text
      testID='step-granularity'
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

export default StepGranularity;
