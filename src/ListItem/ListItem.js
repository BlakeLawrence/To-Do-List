const ListItem = ({ toDo }) => {
  return (
    <li className={`item ${toDo.completed ? "item-complete" : ""}`}>
      {toDo.item}
    </li>
  );
};

export default ListItem;
