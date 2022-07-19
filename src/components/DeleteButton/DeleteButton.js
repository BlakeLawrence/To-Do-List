const DeleteButton = ({ text, deleteToDo }) => {
  return (
    <button className="delete-button" onClick={deleteToDo}>
      {text}
    </button>
  );
};

export default DeleteButton;
