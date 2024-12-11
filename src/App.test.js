import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';

// Mock the components
jest.mock('./components/layout/NavMenu', () => () => <div data-testid="nav-menu">NavMenu</div>);
jest.mock('./components/layout/Footer', () => () => <div>Footer</div>);
jest.mock('./components/shared/LoadingSpinner', () => () => <div>Loading...</div>);

// Mock the lazy-loaded components
jest.mock('./components/Home', () => () => <div>Home</div>);
jest.mock('./components/About', () => () => <div>About</div>);
jest.mock('./components/Contact', () => () => <div>Contact</div>);
jest.mock('./components/Teams', () => () => <div>Teams</div>);
jest.mock('./components/Events', () => () => <div>Events</div>);

test('renders NavMenu component', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const navElement = screen.getByTestId('nav-menu');
  expect(navElement).toBeInTheDocument();
});

