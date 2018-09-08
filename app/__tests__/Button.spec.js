import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Button from '../View/Components/Button';

afterEach(cleanup);

test('Renders a Button with type button, including passed text & having the correct className', () => {
  const testText = 'Test that Button!';
  const className = 'button-new';
  const func = jest.fn();

  const { getByText, container } = render(
    <Button text={testText} className={className} onClick={func} />
  );
  const button = container.firstChild;
  fireEvent.click(getByText(testText));

  expect(button.className).toBe(className);
  expect(button.innerHTML).toMatch(testText);
  expect(func).toHaveBeenCalledTimes(1);
});
