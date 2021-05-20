import * as React from 'react'
import { TextProps } from 'react-native'

import Group from './components/Group'
import MaxLines from './components/MaxLines'
import MinFontSize from './components/MinFontSize'
import OverflowReplacement from './components/OverflowReplacement'
import PresetFontSize from './components/PresetFontSize'
import StepGranularity from './components/StepGranularity'

export enum ResizeTextMode {
  max_lines = 'max_lines',
  min_font_size = 'min_font_size',
  preset_font_sizes = 'preset_font_sizes',
  overflow_replacement = 'overflow_replacement',
  step_granularity = 'step_granularity',
  group = 'group',
}

export interface AutoSizeTextProps extends TextProps {
  children?: React.ReactNode
  fontSize?: number
  mode: ResizeTextMode
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
