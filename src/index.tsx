import React from 'react'

import Group from './components/Group'
import MaxLines from './components/MaxLines'
import MinFontSize from './components/MinFontSize'
import OverflowReplacement from './components/OverflowReplacement'
import PresetFontSize from './components/PresetFontSize'
import StepGranularity from './components/StepGranularity'
import { AutoSizeTextProps } from './types'

const AutoSizeText = ({ ...props }: AutoSizeTextProps) => {
  const selectedMode = props.mode as string

  const Modes: any = {
    max_lines: <MaxLines {...props} />,
    min_font_size: <MinFontSize {...props} />,
    preset_font_sizes: <PresetFontSize {...props} />,
    overflow_replacement: <OverflowReplacement {...props} />,
    step_granularity: <StepGranularity {...props} />,
    group: <Group {...props} />,
    default: <MaxLines {...props} />,
  }

  return Modes[selectedMode] || Modes.default
}

export default AutoSizeText
