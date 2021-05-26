import { cleanup, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import PresetFontSizes from '../components/PresetFontSizes';

afterEach(cleanup);

describe('PresetFontSizes snapshot', () => {
  it('PresetFontSizes renders correctly', () => {
    const tree = renderer
      .create(
        <PresetFontSizes fontSizePresets={[50, 40, 30]} numberOfLines={3}>
          Lorem impsum
        </PresetFontSizes>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('PresetFontSizes mode', () => {
  it('should pass the right props to Text component inside PresetFontSizes', async () => {
    const mockContent = 'Lorem ipsum';
    const mockNumberOfLines = 3;
    const fontSizePresets = [50, 42, 14];
    const mockColor = 'red';

    const { getByTestId } = render(
      <PresetFontSizes
        style={{ color: mockColor }}
        fontSizePresets={fontSizePresets}
        numberOfLines={mockNumberOfLines}
      >
        {mockContent}
      </PresetFontSizes>
    );

    const textComponent = getByTestId('preset-font-sizes');
    const content = textComponent.props.children;
    const numberOfLines = textComponent.props.numberOfLines;
    const adjustsFontSizeToFit = textComponent.props.adjustsFontSizeToFit;
    const fontSize = textComponent.props.style[1].fontSize;
    const color = textComponent.props.style[0].color;

    await waitFor(() => {
      expect(content).toBe(mockContent);
      expect(numberOfLines).toBeFalsy();
      expect(fontSize).toBe(50);
      expect(color).toBe(mockColor);
      expect(adjustsFontSizeToFit).toBeFalsy();
    });
  });
});
