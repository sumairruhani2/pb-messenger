/* eslint-env jest */
// client/tests/Logo.test.jsx

import React from 'react';
import { render } from '@testing-library/react';
import Logo from '../src/Logo';

test('renders logo text', () => {
  const { getByText } = render(<Logo />);
  const logoText = getByText('PB MESSENGER');
  expect(logoText).toBeInTheDocument();
});

test('renders logo svg', () => {
  const { container } = render(<Logo />);
  const svgElement = container.querySelector('svg');
  expect(svgElement).toBeInTheDocument();
});
