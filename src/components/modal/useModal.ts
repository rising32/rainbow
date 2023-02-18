import { closeModal, ModalState, openModal } from '../../store/features/modal/modalSlice';
import { useAppDispatch } from '../../store/hooks';

function useModal() {
  const dispatch = useAppDispatch();

  const handleOpenModal = (modalState: ModalState) => {
    dispatch(openModal(modalState));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return { handleOpenModal, handleCloseModal };
}

export default useModal;
