import { render, screen } from '@testing-library/react';
import { BraidTestProvider } from 'braid-design-system/test';

import '@testing-library/jest-dom';

import { App } from './App';

describe('App', () => {
  it('renders the hidden component with text', () => {
    render(
      // Mock the browser width to be `desktop`
      <BraidTestProvider breakpoint="desktop">
        <App />
      </BraidTestProvider>,
    );

    // Given `Hidden below="tablet"`, `desktop` width should be visible
    expect(screen.getByText('Hello world (greater than tablet)')).toBeVisible();
  });
});
