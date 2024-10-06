import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';

import Title from '../../src/components/Title';

describe('Title', ()=>{
  test('Title shows title, icon, and subtitle', () => {
    render(<Title icon={faSquarePollVertical} title='Title' subtitle='Subtitle'/>);
    const title = screen.getByTestId('title');
    const icon = screen.queryByTestId('icon');
    const subtitle = screen.queryByTestId('subtitle');
    expect(title).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
  test('Title only shows title and icon', () => {
    render(<Title icon={faSquarePollVertical} title='Title'/>);
    const title = screen.getByTestId('title');
    const icon = screen.queryByTestId('icon');
    const subtitle = screen.queryByTestId('subtitle');
    expect(title).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(subtitle).not.toBeInTheDocument();
  });
  test('Title only shows title and subtitle', () => {
    render(<Title title='Title' subtitle='Subtitle'/>);
    const title = screen.getByTestId('title');
    const icon = screen.queryByTestId('icon');
    const subtitle = screen.queryByTestId('subtitle');
    expect(title).toBeInTheDocument();
    expect(icon).not.toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
  test('Title only shows title', () => {
    render(<Title title='Title'/>);
    const title = screen.getByTestId('title');
    const icon = screen.queryByTestId('icon');
    const subtitle = screen.queryByTestId('subtitle');
    expect(title).toBeInTheDocument();
    expect(icon).not.toBeInTheDocument();
    expect(subtitle).not.toBeInTheDocument();
  });
});
