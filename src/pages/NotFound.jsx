import { useRouteError } from "react-router-dom";

const NotFound = () =>{
    const error = useRouteError();
    console.error(error);
    
    return (
        <h1>404 El laberitno del Nofaun</h1>
    )
}

export default NotFound;