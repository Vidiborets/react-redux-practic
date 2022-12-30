export const Controls = ({ step, onDecrement, onIncrement }) => {
  return (
    <div>
      <button type="button" onClick={onDecrement}>
        Уменьшить на {step}
      </button>
      <button type="button" onClick={onIncrement}>
        Увеличить на {step}
      </button>
    </div>
  );
};
