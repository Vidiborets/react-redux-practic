import { connect } from 'react-redux';
const Stats = ({ total, completed }) => {
  return (
    <div>
      <p>Общее кол-во:{total}</p>
      <p>Выполненые:{completed}</p>
    </div>
  );
};

const mapStateToProps = ({ todos: { items } }) => ({
  total: items.length,
  completed: items.reduce(
    (total, todo) => (todo.completed ? total + 1 : total),
    0
  ),
});
export default connect(mapStateToProps)(Stats);
