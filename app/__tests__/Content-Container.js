import React from 'react';
import { render } from 'react-testing-library';
import ContentContainer from '../View/Components/Content-Container';

test('Renders a div element that has passed header', () => {
  const text = 'Hello World!';
  const { getByTestId } = render(<ContentContainer heading={text} />);

  expect(getByTestId('content-container')).toHaveTextContent(text);
});
