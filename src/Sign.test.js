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

test('renders an bigger size panda on click of a button', () => {

  const { rerender } = render(<App />);
  const imgEl = screen.getByAltText('panda');
  const pandaButton = screen.getByText('Panda gets stronger');
  
  fireEvent.click(pandaButton);
  rerender(<App />);
  console.log(imgEl);
  expect(imgEl.style.width).toBe('52.5px');

});