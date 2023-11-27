import {redirect} from "react-router-dom";

const pelosList = [
    {
        name: "PeloEscombro",
        image: "https://i.pinimg.com/550x/18/54/6d/18546ddf328c5ffbd7889d95be6525ca.jpg",
        description: "PeloEscombro es un pelo muy escombroso"
    },
    {
        name: "PeloRata",
        image: "https://i.pinimg.com/550x/d2/a1/d8/d2a1d82b1d26b2758571f40b4aa6c11c.jpg",
        description: "PeloRata es un pelo muy rata"
    },
    {
        name: "Pelagarto",
        image: "https://cloudfront-us-east-1.images.arcpublishing.com/radiomitre/EHVFZ6FF7RDYDK6XVDBRLTT4BU.jpg",
        description: "Pelagarto es un pelo de lagarto"
    },
    {
        name: "PeloGote",
        image: "https://s3.amazonaws.com/tugatocurioso/wp-content/uploads/2019/12/30012816/Los-cortes-de-pelo-m%C3%A1s-feos-del-mundo.jpg",
        description: "PeloGote es un pelo con bigote"
    },
    {
        name: "Pelobezno",
        image: "https://www.okchicas.com/wp-content/uploads/2015/12/los-30-peores-cortes-de-cabello-de-hombre-1-1.jpg",
        description: "Pelo de lobezno, más o menos"
    }
];

const getPelos = () => pelosList;

const getPelo = (name) =>{
    return pelosList.find(pelo=>pelo.name===name);
}

const loaderAll = () => getPelos();

const loaderSingle = ({ params })  =>{
    const pelo = getPelo(params.peloName);
    if(!pelo){
        return redirect("/pelos");
    }
    return pelo;
}

export {
    pelosList,
    getPelos,
    loaderAll,
    loaderSingle
}