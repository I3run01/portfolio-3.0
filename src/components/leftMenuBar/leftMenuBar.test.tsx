import '@testing-library/jest-dom';
import LeftMenuBar from ".";
import { renderWithProviders } from 'src/test/utils/renderWithProviders.tsx';
import { fireEvent, render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from 'src/redux/store'

let leftMenuBar: any;
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key, i18n: { language: 'en', changeLanguage: jest.fn() } })
}));

describe('test the styles', () => {
  beforeEach(() => {
    const leftMenuBarRender = renderWithProviders(<LeftMenuBar />);
  
    leftMenuBar = leftMenuBarRender.getByTestId('left-menu-bar');
  });

  it('left menu width should be 200px in the beggining', () => {
    expect(leftMenuBar).toHaveStyle('width: 200px');
  });

  
  it('left menu child width should be equal by left menu', () => {
    const leftMenuBarChild = leftMenuBar.querySelector('.pages')

    const leftMenuBarWidth = leftMenuBar.style.width;
    const leftMenuBarChildWidth = leftMenuBarChild.style.width;

    expect(leftMenuBarChildWidth).toBe(leftMenuBarWidth)
  });

  it('left menu width should be 50px after the first click', () => {
    fireEvent.click(leftMenuBar)

    setTimeout(() => {
      expect(leftMenuBar).toHaveStyle('width: 50px');
    }, 1000);
  });

  it('should change theme when clicked', async () => {
   
    const themeButton = leftMenuBar.querySelector('.ThemeButton')
    
    const initialColor = themeButton.style.color;

    fireEvent.click(leftMenuBar.querySelector('.changeThemeButton'));

    setTimeout(() => {
      const finalColor = themeButton.style.color;

      expect(finalColor).not.toBe(initialColor);
    }, 1000)
  })
});

describe('test the routes', () => {
  beforeEach(() => {
    render(
      <Provider store={store} >
        <LeftMenuBar />
      </Provider>, 
      {wrapper: BrowserRouter}
    )
  });

  it('should go from home to tech page', async () => {
    const user = userEvent.setup()
    const dashboardButton = leftMenuBar.querySelector('.dashboardButton')

    expect(screen.getByText(/home/i)).toBeInTheDocument()

    await user.click(dashboardButton)

    expect(screen.getByText(/tech/i)).toBeInTheDocument()
  })

  it('should go from tech to home page', async () => {
    const user = userEvent.setup()
    const dashboardButton = leftMenuBar.querySelector('.dashboardButton')

    expect(screen.getByText(/tech/i)).toBeInTheDocument()

    await user.click(dashboardButton)

    expect(screen.getByText(/home/i)).toBeInTheDocument()
  })

  it('should go from home to dashboard page', async () => {
    const user = userEvent.setup()
    const dashboardButton = leftMenuBar.querySelector('.dashboardButton')

    expect(screen.getByText(/home/i)).toBeInTheDocument()

    await user.click(dashboardButton)

    expect(screen.getByText(/dashboard/i)).toBeInTheDocument()
  })
  
})

describe('test languages changes', () => {
  it('should change the language ptbr to en, and en to ptbr', async () => {
    const { getByText } = renderWithProviders(<LeftMenuBar/>)
    const Text = getByText('Language')

    expect(Text.textContent).toBe('Language');

    await act(async () => {
      fireEvent.click(Text);
    });
    
    expect(Text.textContent).toBe('Idioma');
  })

})
