import React from 'react';
import { createPortal } from 'react-dom';
import { useAppSelector } from '../../store/hooks';
import Modal1 from '../sample/Modal1';
import Modal2 from '../sample/Modal2';

const modalDomNode = document.getElementById('modal');

const MODAL_COMPONENTS = {
  first: Modal1,
  second: Modal2,
};

function ModalContainer() {
  const { type } = useAppSelector((state) => state.modal);

  if (!type) {
    return null;
  }

  const Modal = MODAL_COMPONENTS.first;
  if (modalDomNode) {
    return createPortal(<>{Modal}</>, modalDomNode);
  }
  return null;
}

export default ModalContainer;
