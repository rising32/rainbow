import React from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
};
const modalDomNode = document.getElementById('modal');
function ModalContainer({ children }: Props) {
  if (modalDomNode) {
    return createPortal(<>{children}</>, modalDomNode);
  }
  return null;
}

export default ModalContainer;
