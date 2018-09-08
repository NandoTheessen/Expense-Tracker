import React from 'react';
import { render, cleanup } from 'react-testing-library';
import ContentContainer from './Content-Container';

afterEach(cleanup);

test('Renders a div element that has assigned className', () => {
  const className = 'contentcontainer';

  const { container } = render(<ContentContainer className={className} />);
  const div = container.firstChild;

  expect(div.className).toBe(className);
});
