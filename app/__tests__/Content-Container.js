import React from 'react';
import { render } from 'react-testing-library';
import ContentContainer from '../View/Components/Content-Container';

test('Renders a div element that has assigned className', () => {
  const className = 'contentcontainer';

  const { getByTestId } = render(<ContentContainer className={className} />);

  expect(getByTestId('content-container')).toHaveAttribute(
    'class',
    'contentContainer ' + className
  );
});
