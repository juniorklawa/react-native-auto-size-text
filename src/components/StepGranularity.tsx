import * as React from 'react';
import { NativeSyntheticEvent, Text, TextLayoutEventData } from 'react-native';

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

  return (
    <Text
      numberOfLines={numberOfLines}
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
