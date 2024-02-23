/* eslint-env jest */
// client/tests/App.test.jsx

import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';

test('renders without crashing', () => {
  render(<App />);
});

test('axios defaults are set correctly', () => {
  const { axios } = require('axios'); // Mocked axios instance
  const axiosSpy = jest.spyOn(axios, 'defaults', 'get');

  render(<App />);

  expect(axiosSpy).toHaveBeenCalledWith(
    expect.objectContaining({
      baseURL: 'http://localhost:4040',
      withCredentials: true,
    })
  );
});
