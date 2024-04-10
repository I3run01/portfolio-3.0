import '@testing-library/jest-dom';
import LeftMenuBar from ".";
import { renderWithProviders } from 'src/test/utils/renderWithProviders.tsx';
import { fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';

let leftMenuBar: any;

beforeEach(() => {
  const leftMenuBarRender = renderWithProviders(<LeftMenuBar />);

  leftMenuBar = leftMenuBarRender.getByTestId('left-menu-bar');
});

describe('test the styles', () => {

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

  it('should go from home to tech page', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });

    fireEvent.click(leftMenuBar.querySelector('.techButton'));

    setTimeout(() => {
      expect(history.location.pathname).toBe('/tech');
    }, 1000);
  })

  it('should go from tech to home page', () => {
    const history = createMemoryHistory({ initialEntries: ['/tech'] });

    fireEvent.click(leftMenuBar.querySelector('.homeButton'));

    setTimeout(() => {
      expect(history.location.pathname).toBe('/home');
    }, 1000);
  })


  it('should go from home to dashboard page', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });

    fireEvent.click(leftMenuBar.querySelector('.dashboardButton'));

    setTimeout(() => {
      expect(history.location.pathname).toBe('/dashboard');
    }, 1000);
  })
  
})
