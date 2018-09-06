import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Button from './Button';

afterEach(cleanup);

test('Renders a Button with type button with passed text & passed className', () => {
  const testText = 'Test that Button!';
  const { container } = render(<Button text={testText} />);
  const button = container.firstChild;

  expect(button.innerHTML).toMatch(testText);
});
