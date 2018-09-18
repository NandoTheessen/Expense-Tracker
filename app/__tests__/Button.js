import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Button from '../View/Components/Button';

test('Renders a Button with type button, displaying the passed text', () => {
  const testText = 'Test that Button!';
  const func = jest.fn();

  const { getByText } = render(<Button text={testText} onClick={func} />);
  const button = getByText(testText);

  fireEvent.click(button);

  expect(button).toHaveTextContent(testText);
  expect(func).toHaveBeenCalledTimes(1);
});
