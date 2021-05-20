import { TextProps } from 'react-native'

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
