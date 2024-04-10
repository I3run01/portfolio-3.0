// renderWithProviders.tsx
import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store';

const renderWithProviders = (ui: React.ReactElement, options?: RenderOptions) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>
          {ui}
      </BrowserRouter>
    </Provider>,
    options
  );
};

export { renderWithProviders };
