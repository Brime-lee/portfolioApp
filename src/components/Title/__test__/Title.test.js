import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from '../Title';

it('hould render same text passed into children props', () => {
  render(<Title>{'My Title'}</Title>);
  const headingElement = screen.getByText(/my title/i);
  expect(headingElement).toBeInTheDocument();
});
