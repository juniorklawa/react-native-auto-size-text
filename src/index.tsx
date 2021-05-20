import * as React from 'react'
import { TextProps } from 'react-native'

import Group from './components/Group'
import MaxLines from './components/MaxLines'
import MinFontSize from './components/MinFontSize'
import OverflowReplacement from './components/OverflowReplacement'
import PresetFontSize from './components/PresetFontSize'
import StepGranularity from './components/StepGranularity'

export const TEXT_MODE = {
  MaxLines: 'max_lines',
  MinFontSize: 'min_font_size',
  PresetFontSizes: 'preset_font_sizes',
  OverflowReplacement: 'overflow_replacement',
  StepGranularity: 'step_granularity',
  Group: 'group',
}

export interface AutoSizeTextProps extends TextProps {
  children?: React.ReactNode
  fontSize?: number
  mode?: string
  numberOfLines?: number
  minFontSize?: number
  fontSizePresets?: number[]
  overFlowReplacement?: string
  granularity?: number
}

export const AutoSizeText = ({ ...props }: AutoSizeTextProps) => {
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
