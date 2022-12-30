import { connect } from 'react-redux';
import { changeFilter } from '../../../redux/todos/todos-actions';
export const TodoFilter = ({ value, onChange }) => (
  <div>
    <input type="text" value={value} onChange={onChange} />
  </div>
);

const mapStateToProps = state => ({
  value: state.todos.filter,
});
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);
