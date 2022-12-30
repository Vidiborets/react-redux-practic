import { ModalBackDrop, WindowModal } from './Modal.styled';
import React from 'react';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
const modalRoot = document.querySelector('#modal-root');
export const Modal = ({ children, onClose }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const keydownHandler = ({ key }) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
        return;
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', keydownHandler);
    // eslint-disable-next-line no-use-before-define
  }, [keydownHandler]);

  const handleClickBackDrop = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <ModalBackDrop onClick={handleClickBackDrop}>
      <WindowModal>{children}</WindowModal>
    </ModalBackDrop>,
    modalRoot
  );
};
