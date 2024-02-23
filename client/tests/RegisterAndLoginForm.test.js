/* eslint-env jest */
// client/tests/RegisterAndLoginForm.test.jsx

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios'; // Mock axios
import RegisterAndLoginForm from '../src/RegisterAndLoginForm';

jest.mock('axios');

test('renders login form by default', () => {
  const { getByPlaceholderText, getByText } = render(<RegisterAndLoginForm />);
  expect(getByPlaceholderText('Email')).toBeInTheDocument();
  expect(getByPlaceholderText('username')).toBeInTheDocument();
  expect(getByPlaceholderText('password')).toBeInTheDocument();
  expect(getByText('Login')).toBeInTheDocument();
});

test('renders register form when register button is clicked', () => {
  const { getByText } = render(<RegisterAndLoginForm />);
  fireEvent.click(getByText('Register'));
  expect(getByText('Register')).toBeInTheDocument();
  expect(getByText('Already a member?')).toBeInTheDocument();
});

test('calls login endpoint with correct data when login form is submitted', async () => {
  const { getByPlaceholderText, getByText } = render(<RegisterAndLoginForm />);
  const emailInput = getByPlaceholderText('Email');
  const usernameInput = getByPlaceholderText('username');
  const passwordInput = getByPlaceholderText('password');
  const loginButton = getByText('Login');

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.click(loginButton);

  await waitFor(() => {
    expect(axios.post).toHaveBeenCalledWith('login', {
      email: 'test@example.com',
      username: 'testuser',
      password: 'password123',
    });
  });
});

// Similar tests can be written for registration form submission
