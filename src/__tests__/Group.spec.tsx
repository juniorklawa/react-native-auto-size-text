import { cleanup, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Group from '../components/Group';

afterEach(cleanup);

describe('Group snapshot', () => {
  it('MaxLines renders correctly', () => {
    const tree = renderer.create(<Group>Lorem impsum</Group>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Group mode', () => {
  it('should pass the right props to Text component inside Group', async () => {
    const mockContent = 'Lorem ipsum dolor sit amet.';
    const mockColor = 'red';

    const { getByTestId } = render(
      <Group style={{ color: mockColor }}>{mockContent}</Group>
    );

    const textComponent = getByTestId('group');
    const content = textComponent.props.children;
    const adjustsFontSizeToFit = textComponent.props.adjustsFontSizeToFit;
    const color = textComponent.props.style[0].color;

    await waitFor(() => {
      expect(content).toBe(mockContent);
      expect(color).toBe(mockColor);
      expect(adjustsFontSizeToFit).toBeTruthy();
    });
  });
});
