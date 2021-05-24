import * as React from 'react';
import {NativeSyntheticEvent, Text, TextLayoutEventData} from 'react-native';
import {AutoSizeTextProps} from '../types';

const MaxLines = (props: AutoSizeTextProps) => {
  const {fontSize, children, style, numberOfLines} = props;

  const [currentFont, setCurrentFont] = React.useState<number>(
    fontSize as number,
  );
  const handleTextMode = (e: NativeSyntheticEvent<TextLayoutEventData>) => {
    const {lines} = e.nativeEvent;
    if (lines.length > (numberOfLines as number)) {
      setCurrentFont(currentFont - 1);
    }
  };

  return (
    <Text
      numberOfLines={numberOfLines}
      adjustsFontSizeToFit
      style={[
        style,
        {
          fontSize: currentFont,
        },
      ]}
      onTextLayout={e => {
        handleTextMode(e);
      }}>
      {children}
    </Text>
  );
};

export default MaxLines;
