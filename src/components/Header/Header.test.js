import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders the header', () => {
  render(<Header />);
  const header = screen.getByText('El garaje de Mango');
  expect(header).toBeInTheDocument();
});
