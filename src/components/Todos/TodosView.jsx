import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import TodoEditor from './TodoEditor/TodoEditor';
import TodoList from './TodoList/TodoList';
import TodoFilter from './TodoFilter/TodoFilter';
import Stats from './Stats/Stats';
export const TodoView = () => {
  const [showModal, setShowModal] = useState(false);
  const togglelModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <Stats />
      <TodoFilter />
      <button type="button" onClick={togglelModal}>
        Добавить
      </button>
      <TodoList />
      {showModal && (
        <Modal onClose={togglelModal}>
          <button type="button" onClick={togglelModal}>
            Close
          </button>
          <TodoEditor onClick={togglelModal} />
        </Modal>
      )}
    </>
  );
};
