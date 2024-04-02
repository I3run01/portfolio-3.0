import { useState } from "react"
import { BurguerMenuStyled } from "./burguerMenu.style"
import { useSelector } from 'react-redux'
import { RootState } from 'src/redux/store'



type Props = {
    fction: () => void
}

export const BurguerMenu = ({fction}:Props) => {
    const [openMenu, setOpenMenu] = useState<string>('menuOpened')
    const isDark = useSelector((state: RootState) => state.theme.isDark)

    const ChangeMenu = () => {
        if(openMenu == 'menuClosed') setOpenMenu('menuOpened')
        else setOpenMenu('menuClosed')

        fction()
    }

    return (
        <BurguerMenuStyled 
            onClick={ChangeMenu}
            isDark={isDark}
            id='burguerMenu'>
            <div className={`line01 line01${openMenu}`}/>
            <div className={`line02 line02${openMenu}`}/>
            <div className={`line03 line03${openMenu}`}/>
        </BurguerMenuStyled>
    )
}