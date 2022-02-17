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

test('render a kangaroo emoji if you click +KANGAROO button', () => {
  render (<App />);
  const animalEl = screen.getByText('🦘');
  const buttonKangarooEl = screen.getByRole('button', { name: '+ Kangaroo' });
  fireEvent.click(buttonKangarooEl);
  expect(animalEl.textContent).toBe('🦘');
});