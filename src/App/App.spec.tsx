import { render, screen } from '@testing-library/react';
import { BraidTestProvider } from 'braid-design-system/test';

import { App } from './App';

describe('App', () => {
  it('renders the hidden component with text', () => {
    render(
      <BraidTestProvider breakpoint="desktop">
        <App />
      </BraidTestProvider>,
    );

    expect(screen.getByText('Hello world (greater than tablet)')).toBeVisible();
  });
});
