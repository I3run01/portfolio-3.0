import { LeftMenuBarDiv } from "./leftMenuBar.style";
import { useState } from "react"
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

const LeftMenuBar = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const [isMenuClosed, setIsMenuClosed] = useState<boolean>(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    const handleMenuButton = () => setIsMenuClosed(!isMenuClosed)

    return (
        <LeftMenuBarDiv
        data-testid='left-menu-bar'
        $leftMenuWidth = {isMenuClosed ?  '50px' : '200px'}
        $themeColor={Colors.themeColor01}
        $svgDefaultColor={isDark ? Colors.darkFontColor : Colors.lightFontColor}
        >
            <BurguerMenu
                fction={handleMenuButton}
                isMenuClosed={isMenuClosed}
            />
        
            <div className="pages">
                <div onClick={() => navigate('')} className="homeButton">
                    <SvgIcons.HomeIcon/>
                    <Fonts.DesktopParagraph $fontColor = {isDark ? Colors.darkFontColor : Colors.lightFontColor}>
                        {t('Home')}
                    </Fonts.DesktopParagraph>
                </div>
                <div onClick={() => navigate('tech')} className="techButton">
                    <SvgIcons.TechIcon/>
                    <Fonts.DesktopParagraph $fontColor = {isDark ? Colors.darkFontColor : Colors.lightFontColor}>
                        {t('Tech')}
                    </Fonts.DesktopParagraph>
                </div>
            </div>

            <div className="settings">
                <div onClick={() => i18n.language == 'en_us' ? i18n.changeLanguage('pt_br')  :  i18n.changeLanguage('en_us')}>
                    <SvgIcons.LanguageIcon/>
                    <Fonts.DesktopParagraph $fontColor = {isDark ? Colors.darkFontColor : Colors.lightFontColor}>
                        {t('Language')}
                    </Fonts.DesktopParagraph>
                </div>
                <div onClick={() => dispatch(changeTheme())} className="changeThemeButton">
                    <SvgIcons.ThemeICon/>
                    <Fonts.DesktopParagraph $fontColor = {isDark ? Colors.darkFontColor : Colors.lightFontColor} className="ThemeButton">
                        {t('Theme')}
                    </Fonts.DesktopParagraph>
                </div>

                <div onClick={() => navigate('dashboard')} className="dashboardButton">
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