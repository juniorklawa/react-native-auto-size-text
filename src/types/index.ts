import React from 'react';
import { TextProps } from 'react-native';

import { ResizeTextMode } from '../index';

interface CommonProps extends TextProps {
  mode: ResizeTextMode;
  children: React.ReactNode;
}

export type MaxLineProps = {
  mode: ResizeTextMode.max_lines;
  fontSize: number;
  numberOfLines: number;
} & CommonProps;

export type MinFontSizeProps = {
  mode: ResizeTextMode.min_font_size;
  numberOfLines: number;
  minFontSize: number;
  fontSize: number;
} & CommonProps;

export type OverflowReplacementProps = {
  mode: ResizeTextMode.overflow_replacement;
  numberOfLines: number;
  fontSize: number;
  overflowReplacement: string;
} & CommonProps;

export type PresetFontSizesProps = {
  mode: ResizeTextMode.preset_font_sizes;
  fontSizePresets: number[];
  numberOfLines: number;
} & CommonProps;

export type GroupProps = {
  mode: ResizeTextMode.group;
  maxFontSize?: number;
} & CommonProps;

export type GranularityProps = {
  mode: ResizeTextMode.step_granularity;
  fontSize: number;
  numberOfLines: number;
  granularity: number;
} & CommonProps;

export type AllModesProps =
  | MaxLineProps
  | MinFontSizeProps
  | OverflowReplacementProps
  | PresetFontSizesProps
  | GroupProps
  | GranularityProps;

export type SelectedModeProps = CommonProps & AllModesProps;

export interface AutoSizeTextProps extends TextProps {
  children?: React.ReactNode;
  fontSize?: number;
  mode?: ResizeTextMode;
  numberOfLines?: number;
  minFontSize?: number;
  fontSizePresets?: number[];
  overflowReplacement?: string;
  granularity?: number;
}
