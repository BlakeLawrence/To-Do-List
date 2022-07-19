const Button = ({ addToDo, text, setText }) => {
  return (
    <button
      className="button"
      onClick={() => {
        addToDo();
      }}
    >
      {text}
    </button>
  );
};

export default Button;
