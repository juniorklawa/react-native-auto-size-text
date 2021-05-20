import * as React from 'react'
import { Text } from 'react-native'

import { AutoSizeTextProps } from '../types'

const Group = (props: AutoSizeTextProps) => {
  // const [currentFont] = React.useState(2048)

  const { children, style } = props

  return (
    <Text
      adjustsFontSizeToFit
      style={[
        style,
        {
          fontSize: 16,
        },
      ]}
    >
      {children}
    </Text>
  )
}

export default Group
