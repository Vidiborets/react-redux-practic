export const Todo = ({ text, onDelete, onToggleCompleted }) => {
  return (
    <div>
      <button onClick={onToggleCompleted} type="button">
        Выполнено
      </button>
      {text}
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};
