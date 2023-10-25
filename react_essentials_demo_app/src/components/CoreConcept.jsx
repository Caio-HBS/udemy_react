export default function CoreConcept(props) {
    console.log()
    return (
        <li>
            <img src={props.concept.image} alt={props.concept.title} />
            <h3>{props.concept.title}</h3>
            <p>{props.concept.description}</p>
        </li>
    )
}