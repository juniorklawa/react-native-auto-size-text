import * as React from 'react';
import { Text } from 'react-native';

import { AutoSizeTextProps } from '../types';

const Group = (props: AutoSizeTextProps) => {
  const [currentFont] = React.useState<number>(2048);

  const { children, style } = props;

  return (
    <Text
      adjustsFontSizeToFit
      style={[
        style,
        {
          fontSize: currentFont,
        },
      ]}
    >
      {children}
    </Text>
  );
};

export default Group;
