/* eslint-env jest */
// client/tests/Avatar.test.jsx

import React from 'react';
import { render } from '@testing-library/react';
import Avatar from '../src/Avatar';

test('renders with username initials', () => {
  const { getByText } = render(
    <Avatar userId="someUserId" username="John Doe" />
  );
  const usernameInitials = getByText('J');
  expect(usernameInitials).toBeInTheDocument();
});

test('renders with online status indicator when online is true', () => {
  const { container } = render(
    <Avatar userId="someUserId" username="John Doe" online={true} />
  );
  const onlineIndicator = container.querySelector('.bg-green-400');
  expect(onlineIndicator).toBeInTheDocument();
});

test('renders with offline status indicator when online is false', () => {
  const { container } = render(
    <Avatar userId="someUserId" username="John Doe" online={false} />
  );
  const offlineIndicator = container.querySelector('.bg-gray-400');
  expect(offlineIndicator).toBeInTheDocument();
});
