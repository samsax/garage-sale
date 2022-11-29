import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders the footer component', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Ancestra/);
  expect(linkElement).toBeInTheDocument();
});
