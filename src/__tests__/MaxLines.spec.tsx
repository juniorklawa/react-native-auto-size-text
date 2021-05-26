import { cleanup, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import MaxLines from '../components/MaxLines';

afterEach(cleanup);

describe('Maxlines snapshot', () => {
  it('MaxLines renders correctly', () => {
    const tree = renderer
      .create(
        <MaxLines fontSize={15} numberOfLines={2}>
          Lorem impsum
        </MaxLines>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('MaxLines mode', () => {
  it('should pass the right props to Text component inside MaxLines', async () => {
    const mockContent = 'Lorem ipsum';
    const mockNumberOfLines = 3;
    const mockFontSize = 15;
    const mockColor = 'red';

    const { getByTestId } = render(
      <MaxLines
        style={{ color: mockColor }}
        fontSize={mockFontSize}
        numberOfLines={mockNumberOfLines}
      >
        {mockContent}
      </MaxLines>
    );

    const textComponent = getByTestId('max-lines');
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
      expect(adjustsFontSizeToFit).toBeTruthy();
    });
  });
});
