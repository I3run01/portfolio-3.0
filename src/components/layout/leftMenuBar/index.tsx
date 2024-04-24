import { LeftMenuBarDiv } from "./leftMenuBar.style";
import { useEffect, useState } from "react"
import { BurguerMenu } from './BurgerMenu'
import { useSelector } from "react-redux";
import { RootState } from 'src/redux/store'
import { Fonts } from "src/styles/globalVariables.style";
import { Colors } from "src/styles/globalVariables.style";
import { SvgIcons } from 'src/assets/svg/svgIcons'
import { changeTheme } from "src/redux/slice/themeSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

type props = {
    isLeftMenuCloset?: boolean
}

const LeftMenuBar = ({isLeftMenuCloset}: props) => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const [isMenuClosed, setIsMenuClosed] = useState<boolean>(true)
    const [showsBurguerMenu, setShowsBurguesMenu] = useState<boolean>(true)
    const [menuClosedWidth, setMenuClosetWidth] = useState<string>('50px')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    useEffect(() => {
        if(isLeftMenuCloset != undefined) setIsMenuClosed(isLeftMenuCloset)
    }, [isLeftMenuCloset])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 800) {
                setShowsBurguesMenu(false);
                setMenuClosetWidth('0px')
            } else {
                setShowsBurguesMenu(true);
                setMenuClosetWidth('50px')
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMenuButton = () => setIsMenuClosed(!isMenuClosed)
    const changeLanguage = () => i18n.language == 'en' ? i18n.changeLanguage('ptbr')  :  i18n.changeLanguage('en')

    return (
        <LeftMenuBarDiv
        data-testid='left-menu-bar'
        $leftMenuWidth = {isMenuClosed ?  menuClosedWidth : '200px'}
        $themeColor={Colors.themeColor01}
        $svgDefaultColor={isDark ? Colors.darkFontColor : Colors.lightFontColor}
        >   

            {showsBurguerMenu &&
                <BurguerMenu
                    fction={handleMenuButton}
                    isMenuClosed={isMenuClosed}
                />
            }
        
            <div className="pages">
                <div onClick={() => navigate('')}>
                    <SvgIcons.HomeIcon/>
                    <Fonts.DesktopParagraph $fontColor = {isDark ? Colors.darkFontColor : Colors.lightFontColor}>
                        {t('Home')}
                    </Fonts.DesktopParagraph>
                </div>
                <div onClick={() => navigate('tech')}>
                    <SvgIcons.TechIcon/>
                    <Fonts.DesktopParagraph $fontColor = {isDark ? Colors.darkFontColor : Colors.lightFontColor}>
                        {t('Tech')}
                    </Fonts.DesktopParagraph>
                </div>
            </div>

            <div className="settings">
                <div onClick={changeLanguage} data-testid="change-language">
                    <SvgIcons.LanguageIcon/>
                    <Fonts.DesktopParagraph $fontColor = {isDark ? Colors.darkFontColor : Colors.lightFontColor} className="swapLang">
                        {t('Language')}
                    </Fonts.DesktopParagraph>
                </div>
                <div onClick={() => dispatch(changeTheme())} data-testid="change-menu-button">
                    <SvgIcons.ThemeICon/>
                    <Fonts.DesktopParagraph $fontColor = {isDark ? Colors.darkFontColor : Colors.lightFontColor} className="ThemeButton">
                        {t('Theme')}
                    </Fonts.DesktopParagraph>
                </div>

                <div onClick={() => navigate('dashboard')}>
                    <SvgIcons.DashboardIcon/>
                    <Fonts.DesktopParagraph $fontColor = {isDark ? Colors.darkFontColor : Colors.lightFontColor}>
                        {t('Dashboard')}
                    </Fonts.DesktopParagraph>
                </div>
            </div>
        </LeftMenuBarDiv>
    )
}

export default LeftMenuBar