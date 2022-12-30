import { connect } from 'react-redux';
import { deleteTodo, toogleCompleted } from 'redux/todos/todos-actions';
import { Todo } from '../Todo/Todo';
export const TodoList = ({ todos, onDeleteTodo, onToogleCompleted }) => {
  return (
    <ul>
      {todos.map(({ id, text }) => (
        <li key={id}>
          <Todo
            text={text}
            onToggleCompleted={() => onToogleCompleted(id)}
            onDelete={() => onDeleteTodo(id)}
          />
        </li>
      ))}
    </ul>
  );
};
const getVisibleTodos = (allTodos, filter) => {
  const normalizeFilter = filter.toLowerCase();
  return allTodos.filter(({ text }) =>
    text.toLowerCase().includes(normalizeFilter)
  );
};

const mapStateToProps = ({ todos: { items, filter } }) => ({
  todos: getVisibleTodos(items, filter),
});
const mapDispathToPRops = dispatch => ({
  onDeleteTodo: id => dispatch(deleteTodo(id)),
  onToogleCompleted: id => dispatch(toogleCompleted(id)),
});
export default connect(mapStateToProps, mapDispathToPRops)(TodoList);
