import React, { useState } from 'react'
import { NativeSyntheticEvent, Text, TextLayoutEventData } from 'react-native'

import { AutoSizeTextProps } from '../types'

const PresetFontSize = (props: AutoSizeTextProps) => {
  const { fontSizePresets, children, style, numberOfLines } = props
  const [currentFont, setCurrentFont] = useState<number>(
    fontSizePresets![0] as number
  )
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleTextMode = (e: NativeSyntheticEvent<TextLayoutEventData>) => {
    const { lines } = e.nativeEvent
    if (lines.length > (numberOfLines as number)) {
      if (currentIndex < fontSizePresets!.length - 1) {
        const updatedIndex = currentIndex + 1
        setCurrentIndex(updatedIndex)
        setCurrentFont(fontSizePresets![updatedIndex])
      }
    }
  }

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        style,
        {
          fontSize: currentFont,
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

export default PresetFontSize
