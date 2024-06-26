// renderWithProviders.tsx
import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store';
// import i18n from 'src/i18n/i18n';
// import { I18nextProvider } from 'react-i18next';

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
