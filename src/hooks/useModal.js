import { useState } from 'react';
export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const toogleModal = () => {
    setIsShowing(!isShowing);
  };
  return {
    isShowing,
    toogleModal,
  };
};
