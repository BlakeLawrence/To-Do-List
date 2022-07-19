import ListItem from "../../ListItem/ListItem";
import DeleteButton from "../DeleteButton/DeleteButton";
import DoneButton from "../DoneButton/DoneButton";

const List = ({ todos, setTodos }) => {
  return todos.map(function (toDo) {
    function deleteToDo() {
      setTodos(todos.filter((el) => el.id !== toDo.id));
    }

    return (
      <div className="form" key={Math.random() * 500}>
        <div className="list-items">
          <ListItem toDo={toDo} key={toDo.id} />
        </div>
        <DoneButton todos={todos} setTodos={setTodos} toDo={toDo} text={"✅"} />
        <DeleteButton text={"❌"} deleteToDo={deleteToDo} />
      </div>
    );
  });
};

export default List;
