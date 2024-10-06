import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../src/App';


describe('App', ()=>{
  // Test if the layout is rendered correctly
  test('renders layout correctly', () => {
    render(<App />);
    const view = screen.getByTestId('view');
    const header = screen.getByTestId('header');
    const footer = screen.getByTestId('footer');
    const body = screen.getByTestId('body');
    expect(view).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(body).toBeInTheDocument();
  });
});
