import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the span element in the Navbar', () => {
  render(<App />);
  const element = screen.getByText(/BikEEE/i);
  expect(element).toBeInTheDocument();
});
