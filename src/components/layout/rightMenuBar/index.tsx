import { useSelector } from "react-redux"
import { RightMenuBarDiv } from "./rightMenuBar.style"
import { SvgIcons } from "src/assets/svg/svgIcons"
import { Colors } from "src/styles/globalVariables.style"
import { RootState } from 'src/redux/store'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

type props = {
    isRightMenuClosedInMobile: boolean
}

const RightMenuBar = ({isRightMenuClosedInMobile}: props) => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)

    const [rightMenuWidth, setRightMenuWidth] = useState('60px')

    useEffect(() => {
        setRightMenuWidth(isRightMenuClosedInMobile ? '0px' : '60px')
    }, [isRightMenuClosedInMobile])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 800) setRightMenuWidth('60px')
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <RightMenuBarDiv 
        $fontColor={isDark ? Colors.darkFontColor : Colors.lightFontColor}
        $width={rightMenuWidth}>
            <Link to={'https://api.whatsapp.com/send?phone=5541995686185'} target="_blank"  className="icons" data-testid='whatsapp-button'>
                <SvgIcons.WhatsAppIcon/>
            </Link>

            <Link to={'https://www.linkedin.com/in/i3run01'} target="_blank"  className="icons" data-testid='linkedin-button'>
                <SvgIcons.LinkedInIcon/>
            </Link>

            <Link to={'https://github.com/I3run01'} target="_blank"  className="icons" data-testid='github-button'>
                <SvgIcons.GitHubIcon/>
            </Link>

            <Link to={'https://drive.google.com/drive/folders/1MAeyz6n7yw1zHPX_BPEFEQ5pLqpvypz7?usp=drive_link'} target="_blank"  className="icons" data-testid='cvs-button'>
                <SvgIcons.CvIcon/>
            </Link>
            
        </RightMenuBarDiv>
    )
}

export default RightMenuBar