import { MobileTopMenuDiv } from "./mobileTopMenu.style"
import { BurguerMenu } from "../leftMenuBar/BurgerMenu"
import { SvgIcons } from "src/assets/svg/svgIcons"
import { RootState } from "src/redux/store"
import { useSelector } from "react-redux"
import { Colors } from "src/styles/globalVariables.style"

type pros = {
    burguerFunction: () => void,
    homeFunction: () => void,
    shareFunction: () => void,
}

export const MobileTopMenu = ({burguerFunction, homeFunction, shareFunction}: pros) => {
    const isDark = useSelector((state: RootState) => state.theme.isDark) 

    return (
        <MobileTopMenuDiv $svgColor={isDark ? Colors.darkFontColor : Colors.lightFontColor}>
            <BurguerMenu fction={burguerFunction} isMenuClosed/>
            <div className="icons" onClick={homeFunction}><SvgIcons.HomeIcon /></div>
            <div className="icons" onClick={shareFunction}><SvgIcons.ShareIcon /></div>           
        </MobileTopMenuDiv>
    )
}