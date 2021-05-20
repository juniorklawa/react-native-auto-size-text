import * as React from 'react'
import { NativeSyntheticEvent, Text, TextLayoutEventData } from 'react-native'

import { AutoSizeTextProps } from '../index'

const MinFontSize = (props: AutoSizeTextProps) => {
  const { fontSize, children, style, numberOfLines, minFontSize } = props

  const [currentFont, setCurrentFont] = React.useState(fontSize)
  const handleTextMode = (e: NativeSyntheticEvent<TextLayoutEventData>) => {
    const { lines } = e.nativeEvent
    if (lines.length > (numberOfLines as number)) {
      setCurrentFont((currentFont as number) - 1)
    }
  }

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        style,
        {
          fontSize: minFontSize,
        },
      ]}
      onTextLayout={(e) => {
        handleTextMode(e)
      }}
    >
      {children}
    </Text>
  )
}

export default MinFontSize
