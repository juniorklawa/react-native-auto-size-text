import { cleanup, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import MinFontSize from '../components/MinFontSize';

afterEach(cleanup);

describe('MinFontSize snapshot', () => {
  it('MinFontSize renders correctly', () => {
    const tree = renderer
      .create(
        <MinFontSize minFontSize={12} fontSize={14} numberOfLines={2}>
          Lorem impsum
        </MinFontSize>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('MinFontSize mode', () => {
  it('should pass the right props to Text component inside MinFontSize', async () => {
    const mockContent = 'Lorem ipsum';
    const mockNumberOfLines = 3;
    const mockFontSize = 24;
    const mockColor = 'red';

    const { getByTestId } = render(
      <MinFontSize
        style={{ color: mockColor }}
        numberOfLines={mockNumberOfLines}
        minFontSize={mockFontSize}
        fontSize={mockFontSize}
      >
        {mockContent}
      </MinFontSize>
    );

    const textComponent = getByTestId('min-font-size');
    const content = textComponent.props.children;
    const numberOfLines = textComponent.props.numberOfLines;
    const adjustsFontSizeToFit = textComponent.props.adjustsFontSizeToFit;
    const fontSize = textComponent.props.style[1].fontSize;
    const color = textComponent.props.style[0].color;

    await waitFor(() => {
      expect(content).toBe(mockContent);
      expect(numberOfLines).toBe(mockNumberOfLines);
      expect(fontSize).toBe(mockFontSize);
      expect(color).toBe(mockColor);
      expect(adjustsFontSizeToFit).toBeFalsy();
    });
  });
});
