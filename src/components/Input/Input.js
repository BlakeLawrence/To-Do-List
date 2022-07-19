import Button from "../Button/Button";

const Input = ({ addToDo, text, setText }) => {
  return (
    <div>
      <input
        value={text}
        type="text"
        className="input-field"
        placeholder="enter your todo here"
        onChange={(event) => setText(event.target.value)}
      />
      <Button addToDo={addToDo} text={"Add todo"} setText={setText}></Button>
    </div>
  );
};

export default Input;
