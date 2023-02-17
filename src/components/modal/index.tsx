import React, { useEffect, useRef } from 'react';
import ModalContainer from './ModalContainer';
import useOutSideClick from '../../hooks/useOutSideClick';

type Props = {
  open: boolean;
  onClose: () => void;
};
function Modal({ open, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleClose = () => {
    onClose();
  };
  useOutSideClick(modalRef, handleClose);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <ModalContainer>
      <div
        className={`fixed w-full h-full top-0 bottom-0 left-0 right-0 z-50 bg-black/20 ${
          open ? '' : 'hidden'
        }`}
      >
        <div
          ref={modalRef}
          className='bg-white rounded-md h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12'
        >
          <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </ModalContainer>
  );
}

export default Modal;
