const DoneButton = ({ text, todos, setTodos, toDo }) => {
  function completeHandler() {
    setTodos(
      todos.map((item) => {
        if (item.id === toDo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  }

  return (
    <button onClick={completeHandler} className="done-button">
      {text}
    </button>
  );
};

export default DoneButton;
