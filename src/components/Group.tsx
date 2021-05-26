import * as React from 'react';
import { Text } from 'react-native';

import { AutoSizeTextProps } from '../types';

const Group = (props: AutoSizeTextProps) => {
  const [maxSize] = React.useState<number>(1000);

  const { children, style, ...rest } = props;

  return (
    <Text
      testID='group'
      adjustsFontSizeToFit
      numberOfLines={maxSize}
      style={[
        style,
        {
          fontSize: maxSize,
        },
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default Group;
