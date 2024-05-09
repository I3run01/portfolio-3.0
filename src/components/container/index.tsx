import { ReactNode } from "react"
import { ContainerMain } from './container.style'

type props = {
    children: ReactNode
}

export const Constainer = ({children}:props) => {

    return (
        <ContainerMain>
            {children}
        </ContainerMain>
    )
}