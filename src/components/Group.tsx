import * as React from 'react';
import { Text } from 'react-native';

import { AutoSizeTextProps } from '../types';

const Group = (props: AutoSizeTextProps) => {
  const [maxSize] = React.useState<number>(1000);

  const { children, style } = props;

  return (
    <Text
      adjustsFontSizeToFit
      testID='group'
      numberOfLines={maxSize}
      style={[
        style,
        {
          fontSize: maxSize,
        },
      ]}
    >
      {children}
    </Text>
  );
};

export default Group;
