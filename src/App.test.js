import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {

  test('renders Navbar component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Check if Navbar text (e.g., "Home") is present
    const navbarElement = screen.getByText(/home/i);
    expect(navbarElement).toBeInTheDocument();
  });

  test('renders Footer component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Check if Footer text (e.g., "© 2025") is present
    const footerElement = screen.getByText(/© 2025/i);
    expect(footerElement).toBeInTheDocument();
  });

});

