import { useRoutes } from "react-router-dom";
import Home from 'src/pages/home'
export const MainRoutes = () => {

    return useRoutes([
        {path: '/', element: <Home/> },
    ])
}
