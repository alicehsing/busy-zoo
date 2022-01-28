import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome to Busy Zoo', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Busy Zoo/i);
  expect(linkElement).toBeInTheDocument();
});
