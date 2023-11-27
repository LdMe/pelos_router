import PeloCard from "../components/PeloCard";
import { pelosList } from "../utils/pelosData";
import { useLoaderData,Link } from "react-router-dom";

const Pelos = () =>{
    const pelosList = useLoaderData();
    return (
        <section className="pelosList">
            {pelosList.map(pelo => (
                <Link key={pelo.name} to={"/pelos/"+pelo.name}>
                    <PeloCard  pelo={pelo} />
                </Link>
            ))}
        </section>
    )
}


export default Pelos;