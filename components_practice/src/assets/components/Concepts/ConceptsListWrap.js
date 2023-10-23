import ConceptsListItem from "../ConceptsListItem";

export default function ConceptsListWrap(props) {
  return (
    <ul id="concepts">
      <ConceptsListItem items={props.props[0]}></ConceptsListItem>
      <ConceptsListItem items={props.props[1]}></ConceptsListItem>
      <ConceptsListItem items={props.props[2]}></ConceptsListItem>
    </ul>
  );
}
