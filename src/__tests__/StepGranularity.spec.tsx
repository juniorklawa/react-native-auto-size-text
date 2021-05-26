import { cleanup, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import StepGranularity from '../components/StepGranularity';

afterEach(cleanup);

describe('StepGranularity snapshot', () => {
  it('StepGranularity renders correctly', () => {
    const tree = renderer
      .create(
        <StepGranularity fontSize={14} granularity={10} numberOfLines={3}>
          Lorem impsum
        </StepGranularity>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('StepGranularity mode', () => {
  it('should pass the right props to Text component inside StepGranularity', async () => {
    const mockContent = 'Lorem ipsum';
    const mockFontSize = 64;
    const mockColor = 'red';

    const { getByTestId } = render(
      <StepGranularity
        style={{ color: mockColor }}
        fontSize={mockFontSize}
        numberOfLines={2}
        granularity={10}
      >
        {mockContent}
      </StepGranularity>
    );

    const textComponent = getByTestId('step-granularity');
    const content = textComponent.props.children;
    const numberOfLines = textComponent.props.numberOfLines;
    const adjustsFontSizeToFit = textComponent.props.adjustsFontSizeToFit;
    const fontSize = textComponent.props.style[1].fontSize;
    const color = textComponent.props.style[0].color;

    await waitFor(() => {
      expect(content).toBe(mockContent);
      expect(numberOfLines).toBeFalsy();
      expect(fontSize).toBe(mockFontSize);
      expect(color).toBe(mockColor);
      expect(adjustsFontSizeToFit).toBeFalsy();
    });
  });
});
