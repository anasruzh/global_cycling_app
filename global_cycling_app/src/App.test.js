import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const text = screen.getByText('Select video you want to watch');
  expect(text).toBeInTheDocument();
});
