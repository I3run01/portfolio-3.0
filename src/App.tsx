import { GlobalStyle } from "src/global.style"
import { MainRoutes } from 'src/routes/mainRoutes'
import LeftMenuBar from "./components/leftMenuBar"
import RightMenuBar from "./components/rightMenuBar"


function App() {

  return (
    <GlobalStyle>
      <LeftMenuBar/>
      <MainRoutes/>
      <RightMenuBar/>
    </GlobalStyle>
  )
}

export default App
