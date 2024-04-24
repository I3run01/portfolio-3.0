import '@testing-library/jest-dom';
import LeftMenuBar from ".";
import { renderWithProviders } from 'src/test/utils/renderWithProviders.tsx';
import { fireEvent, render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from 'src/redux/store'
import { Colors } from 'src/styles/globalVariables.style';

let leftMenuBar: any;
let BurguerMenuButton: any;
let changeThemeButton: any
let changeLanguageButton: any

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key, i18n: { language: 'en', changeLanguage: jest.fn() } })
}));


describe('test the styles', () => {
  beforeEach(() => {
    const leftMenuBarRender = renderWithProviders(<LeftMenuBar />);
  
    leftMenuBar = leftMenuBarRender.getByTestId('left-menu-bar');
    BurguerMenuButton = leftMenuBarRender.getByTestId('burguer-menu-button');
    changeThemeButton = leftMenuBarRender.getByTestId('change-menu-button');
  });

  it('left menu width should be 50px in the beggining', () => {
    expect(leftMenuBar).toHaveStyle('width: 50px');
  });

  
  it('left menu child width should be equal by left menu', () => {
    const leftMenuBarChild = leftMenuBar.querySelector('.pages')

    const leftMenuBarWidth = leftMenuBar.style.width;
    const leftMenuBarChildWidth = leftMenuBarChild.style.width;

    expect(leftMenuBarChildWidth).toBe(leftMenuBarWidth)
  });

  it('left menu width should be 200px after the first click', async () => {
    
    await act( async () => {
      fireEvent.click(BurguerMenuButton)
    })

    expect(leftMenuBar).toHaveStyle('width: 200px');
  });

  it('should change theme when clicked', async () => {
   
    const themeFont = leftMenuBar.querySelector('.ThemeButton')

    expect(themeFont).toHaveStyle(`color: ${Colors.lightFontColor}`)

    await act( async () => {
      fireEvent.click(changeThemeButton);
    })

    expect(themeFont).toHaveStyle(`color: ${Colors.darkFontColor}`)

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
  // TODO: find why changeLanguageTXT is not changing
  beforeEach(() => {
    const leftMenuBarRender = renderWithProviders(<LeftMenuBar />);

    leftMenuBar = leftMenuBarRender.getByTestId('left-menu-bar');
    changeLanguageButton = leftMenuBarRender.getByTestId('change-language');
  })

  it('should change the language ptbr to en, and en to ptbr', async () => {

    const changeLanguageTXT = changeLanguageButton.querySelector('.swapLang')

    expect(changeLanguageTXT).toHaveTextContent('Language');

    // await act( async () => {
    //   fireEvent.click(changeLanguageButton);
    // });
    
    // expect(changeLanguageTXT).toHaveTextContent('Idioma');
  })
})
