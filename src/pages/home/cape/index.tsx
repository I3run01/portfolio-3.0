import { useSelector } from "react-redux"
import { CapeDiv } from "./cape.style"
import { RootState } from "src/redux/store"
import { Colors } from "src/styles/globalVariables.style"
import CapePhoto from 'src/assets/photos/capePhoto.png'

export const Cape = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)

    return (
        <CapeDiv $fontColor={isDark ? Colors.darkFontColor : Colors.lightFontColor}>
            <div className="photoDiv">
                <img src={CapePhoto} alt="" />
            </div>
            <div className="abilitiesDiv"></div>
        </CapeDiv>
    )
}