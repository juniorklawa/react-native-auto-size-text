import * as React from 'react'
import { NativeSyntheticEvent, Text, TextLayoutEventData } from 'react-native'

import { AutoSizeTextProps } from '../types'

const OverflowReplacement = (props: AutoSizeTextProps) => {
  const {
    fontSize,
    children,
    style,
    numberOfLines,
    overFlowReplacement,
  } = props
  const [currentText, setCurrentText] = React.useState<string>('')

  const handleTextMode = (e: NativeSyntheticEvent<TextLayoutEventData>) => {
    const { lines } = e.nativeEvent
    if (lines.length > (numberOfLines as number)) {
      setCurrentText(overFlowReplacement as string)
      return
    }

    setCurrentText(currentText)
  }

  return (
    <Text
      style={[
        style,
        {
          fontSize: fontSize,
        },
      ]}
      onTextLayout={(e) => {
        handleTextMode(e)
      }}
    >
      {currentText ? currentText : children}
    </Text>
  )
}

export default OverflowReplacement
