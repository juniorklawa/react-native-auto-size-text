import { cleanup, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import OverflowReplacement from '../components/OverflowReplacement';

afterEach(cleanup);

describe('OverflowReplacement snapshot', () => {
  it('OverflowReplacement renders correctly', () => {
    const tree = renderer
      .create(
        <OverflowReplacement
          overflowReplacement='Overflowing'
          fontSize={14}
          numberOfLines={2}
        >
          Lorem impsum
        </OverflowReplacement>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('OverflowReplacement mode', () => {
  it('should pass the right props to Text component inside OverflowReplacement', async () => {
    const mockContent =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    const mockNumberOfLines = 3;
    const mockFontSize = 24;
    const mockColor = 'red';

    const { getByTestId } = render(
      <OverflowReplacement
        style={{ color: mockColor }}
        fontSize={mockFontSize}
        numberOfLines={mockNumberOfLines}
        overflowReplacement={'foobar'}
      >
        {mockContent}
      </OverflowReplacement>
    );

    const textComponent = getByTestId('overflow-replacement');
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
