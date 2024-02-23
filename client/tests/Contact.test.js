/* eslint-env jest */
// client/tests/Contact.test.jsx

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Contact from '../src/Contact';

test('renders contact with username and avatar', () => {
  const { getByText } = render(<Contact id="someId" username="John Doe" />);
  const usernameElement = getByText('John Doe');
  expect(usernameElement).toBeInTheDocument();
});

test('calls onClick handler with correct id when clicked', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(
    <Contact id="someId" username="John Doe" onClick={onClickMock} />
  );
  const contactElement = getByText('John Doe');
  fireEvent.click(contactElement);
  expect(onClickMock).toHaveBeenCalledWith('someId');
});

test('renders selected contact with background color', () => {
  const { container } = render(
    <Contact id="someId" username="John Doe" selected={true} />
  );
  const contactElement = container.querySelector('.bg-red-50');
  expect(contactElement).toBeInTheDocument();
});
