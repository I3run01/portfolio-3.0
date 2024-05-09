import { AboutDiv } from "./about.style"
import { Colors, Fonts } from "src/styles/globalVariables.style"
import { useSelector } from "react-redux"
import { RootState } from "src/redux/store"
import { Constainer } from 'src/components/container'

//temp
//TODO: after create the service, swap to the api base64
import { photoBase64 } from "./mocks/photoBase64"
import { paragraph } from "./mocks/paragraph"


export const About = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const FONT_COLOR = isDark ? Colors.darkFontColor : Colors.lightFontColor
    const PARAGRAPH_BG_COLOR = isDark ? Colors.darkBgColor02 : Colors.lightBgColor02

    return (
        <Constainer>
            <AboutDiv 
            $borderColor={FONT_COLOR}
            $paragraphBackgroundColor={PARAGRAPH_BG_COLOR}>
                <Fonts.Title02 $fontColor={FONT_COLOR}>
                    About
                </Fonts.Title02>

                <div className="flexBox">
                    <img src={photoBase64.base64} alt="" />
                    <Fonts.Paragraph $fontColor={FONT_COLOR}>
                        {paragraph.text}
                    </Fonts.Paragraph>
                </div>
            </AboutDiv>
        </Constainer>
    )
}