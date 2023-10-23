export default function ConceptsListItem(props) {
  return (
    <li className="concept">
      <img src={props.items.image} alt={props.items.title} />
      <h2>{props.items.title}</h2>
      <p>{props.items.description}</p>
    </li>
  );
}
