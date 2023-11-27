import PeloCard from "../components/PeloCard";

import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PeloSingle = () =>{
    const pelo = useLoaderData();
    const navigate = useNavigate();
    const handleBack = () =>{
        navigate(-1);
    }
    return (
    <PeloCard pelo={pelo} >
        <button onClick={handleBack}>Atras</button>
    </PeloCard>)
}

export default PeloSingle;

