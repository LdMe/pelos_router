
const PeloCard = ({pelo,children}) => {

    return (
        <article className="peloCard">
            <h2>{pelo.name}</h2>
            <img src={pelo.image} alt={pelo.name} />
            <p>{pelo.description}</p>
            {children}
        </article>
    )
}

export default PeloCard;