import { connect } from 'react-redux';
import { useState } from 'react';
import { addTodo } from '../../../redux/todos/todos-actions';
export const TodoEditor = ({ onSubmit, onClick }) => {
  const [message, setMessage] = useState('');
  const handleChange = e => {
    setMessage(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (message !== '') {
      onSubmit(message);
      setMessage('');
      onClick();
      return;
    }
    alert('Дружок у тебя пусто в голове');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input value={message} type="text" onChange={handleChange} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

const mapDispathToProps = dispatch => ({
  onSubmit: text => dispatch(addTodo(text)),
});
export default connect(null, mapDispathToProps)(TodoEditor);
