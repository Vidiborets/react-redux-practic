import React from 'react';
import { connect } from 'react-redux';
import { Controls } from './Controls';
import * as actions from '../../redux/counter/counter-actions';

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div>
      <p>{value}</p>
      <Controls
        step={step}
        onDecrement={() => {
          onDecrement(step);
        }}
        onIncrement={() => {
          onIncrement(step);
        }}
      />
    </div>
  );
}
const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});
const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(actions.increment(value)),
  onDecrement: value => dispatch(actions.decrement(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
