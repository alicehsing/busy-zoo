import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('test to see if we click Open Zoo button, the text changes to Open', () => {
  render(<App 
    isOpen={true}
  />);
  const signTextEl = screen.getByText(/OPEN/i);
  const isOpenButton = screen.getByText('Open Zoo');
  fireEvent.click(isOpenButton);
  expect(signTextEl).toBeInTheDocument();
});