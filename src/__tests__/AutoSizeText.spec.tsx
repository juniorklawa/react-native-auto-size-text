import { cleanup, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { AutoSizeText, ResizeTextMode } from '../index';

afterEach(cleanup);

describe('AutoSizeText snapshot', () => {
  it('AutoSizeText renders correctly', () => {
    const tree = renderer
      .create(
        <AutoSizeText
          fontSize={20}
          numberOfLines={3}
          mode={ResizeTextMode.max_lines}
        >
          Lorem impsum
        </AutoSizeText>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('AutoSizeText mode', () => {
  it('should return MaxLines if max_lines is selected', async () => {
    const { getByTestId } = render(
      <AutoSizeText
        fontSize={20}
        numberOfLines={3}
        mode={ResizeTextMode.max_lines}
      >
        Lorem impsum
      </AutoSizeText>
    );

    const maxLinesMode = getByTestId('max-lines');

    await waitFor(() => {
      expect(maxLinesMode).toBeTruthy();
    });
  });

  it('should return Group if group is selected', async () => {
    const { getByTestId } = render(
      <AutoSizeText numberOfLines={3} mode={ResizeTextMode.group}>
        Lorem impsum
      </AutoSizeText>
    );

    const groupMode = getByTestId('group');

    await waitFor(() => {
      expect(groupMode).toBeTruthy();
    });
  });

  it('should return MinFontSize if min_font_size is selected', async () => {
    const { getByTestId } = render(
      <AutoSizeText
        minFontSize={14}
        fontSize={18}
        numberOfLines={3}
        mode={ResizeTextMode.min_font_size}
      >
        Lorem impsum
      </AutoSizeText>
    );

    const groupMode = getByTestId('min-font-size');

    await waitFor(() => {
      expect(groupMode).toBeTruthy();
    });
  });

  it('should return OverflowReplacement if overflow_replacement is selected', async () => {
    const { getByTestId } = render(
      <AutoSizeText
        overflowReplacement='Overflow replacement'
        fontSize={18}
        numberOfLines={3}
        mode={ResizeTextMode.overflow_replacement}
      >
        Lorem impsum
      </AutoSizeText>
    );

    const groupMode = getByTestId('overflow-replacement');

    await waitFor(() => {
      expect(groupMode).toBeTruthy();
    });
  });

  it('should return PresetFontSizes if preset_font_sizes is selected', async () => {
    const { getByTestId } = render(
      <AutoSizeText
        fontSizePresets={[64, 40, 20]}
        numberOfLines={3}
        mode={ResizeTextMode.preset_font_sizes}
      >
        Lorem impsum
      </AutoSizeText>
    );

    const groupMode = getByTestId('preset-font-sizes');

    await waitFor(() => {
      expect(groupMode).toBeTruthy();
    });
  });

  it('should return StepGranularity if step_granularity is selected', async () => {
    const { getByTestId } = render(
      <AutoSizeText
        granularity={10}
        fontSize={24}
        numberOfLines={3}
        mode={ResizeTextMode.step_granularity}
      >
        Lorem impsum
      </AutoSizeText>
    );

    const groupMode = getByTestId('step-granularity');

    await waitFor(() => {
      expect(groupMode).toBeTruthy();
    });
  });
});
