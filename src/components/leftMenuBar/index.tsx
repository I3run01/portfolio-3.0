import { LeftMenuBarDiv } from "./LeftMenuBar.style";
import { useState } from "react"
import { BurguerMenu } from './BurgerMenu'

const LeftMenuBar = () => {
    const [menuOpen, setMenuOpen] = useState<string>('opened')

    const handleMenuButton = () => {
        menuOpen === 'opened' ? setMenuOpen('closed') :  setMenuOpen('opened')
    }

    return (
        <LeftMenuBarDiv>
            <BurguerMenu
                fction={handleMenuButton}
            />
           <h1>Left Menu</h1>
        </LeftMenuBarDiv>
    )
}

export default LeftMenuBar