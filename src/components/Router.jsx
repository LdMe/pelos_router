import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../pages/Root";
import NotFound from "../pages/NotFound";
import Pelos from "../pages/Pelos";
import PeloSingle from "../pages/PeloSingle";
import Home from "../pages/Home";
import {loaderAll as pelosLoader, loaderSingle as peloLoader} from "../utils/pelosData";

const router = createBrowserRouter([
    {
        path :"/",
        element: <Root />,
        errorElement: <NotFound />,
        children:[
            {
                path :"/",
                element: <Home/>,
            },
            {
                path :"/pelos",
                element: <Pelos/>,
                loader: pelosLoader
            },
            {
                path :"/pelos/:peloName",
                element: <PeloSingle />,
                loader: peloLoader
            },
            {
                path :"/app",
                element: <App/>
            }
        ]
    },
    
]);

export default router;