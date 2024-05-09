import { AboutDiv } from "./about.style"
import { Colors, Fonts } from "src/styles/globalVariables.style"
import { useSelector } from "react-redux"
import { RootState } from "src/redux/store"
import { Constainer } from 'src/components/container'

//temp
//TODO: after create the service, swap to the api base64
import { photoBase64 } from "./mocks/photoBase64"


export const About = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const FONT_COLOR = isDark ? Colors.darkFontColor : Colors.lightFontColor

    return (
        <Constainer>
            <AboutDiv>
                <Fonts.Title02 $fontColor={FONT_COLOR}>
                    About
                </Fonts.Title02>

                <img src={photoBase64.base64} alt="" />
            </AboutDiv>
        </Constainer>
    )
}