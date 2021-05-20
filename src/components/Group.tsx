import React, { useState } from 'react'
import { Text } from 'react-native'

import { AutoSizeTextProps } from '../types'

const Group = (props: AutoSizeTextProps) => {
  const [currentFont] = useState(2048)

  const { children, style } = props

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
  )
}

export default Group
