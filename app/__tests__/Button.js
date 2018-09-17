import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Button from '../View/Components/Button';

test('Renders a Button with type button, including passed text & having the correct className', () => {
  const testText = 'Test that Button!';
  const className = 'button-new';
  const func = jest.fn();

  const { getByText } = render(
    <Button text={testText} className={className} onClick={func} />
  );
  const button = getByText(testText);

  fireEvent.click(button);
  
  expect(button).toHaveAttribute('class', className);
  expect(button).toHaveTextContent(testText);
  expect(func).toHaveBeenCalledTimes(1);
});
