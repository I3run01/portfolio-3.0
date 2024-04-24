import { ReactNode, useState } from "react"
import { LayoutDiv } from "./layout.style"
import LeftMenuBar from './leftMenuBar'
import RightMenuBar from './rightMenuBar'
import { MobileTopMenu } from "./mobileTopMenu"
import { Main } from "./main"

type props = {
    children: ReactNode
}

export const Layout = ({children}: props) => {
    const [isLeftMenuClosed, setIsLeftMenuClosed] = useState<boolean>(true)
    const [isRightMenuClosedInMobile, setIsRightMenuClosedInMobile] = useState<boolean>(true)

    const handleBurguerMenuClick = () => {
        setIsLeftMenuClosed(!isLeftMenuClosed)
        setIsRightMenuClosedInMobile(true)
    }

    const handleShareIconClick = () => {
        setIsRightMenuClosedInMobile(!isRightMenuClosedInMobile)
        setIsLeftMenuClosed(true)
    }

    const handleHomeButtonClick = () => {
        setIsLeftMenuClosed(true)
        setIsRightMenuClosedInMobile(true)
    }

    return (
        <>
        <MobileTopMenu 
        burguerFunction={handleBurguerMenuClick} 
        homeFunction={handleHomeButtonClick} 
        shareFunction={handleShareIconClick}
        isMenuClosed={isLeftMenuClosed}/>
        <LayoutDiv>
            <LeftMenuBar isLeftMenuCloset={isLeftMenuClosed}/>
            <Main>
                {children}
            </Main>
            <RightMenuBar isRightMenuClosedInMobile={isRightMenuClosedInMobile}/>
        </LayoutDiv>
        </>
    )
}