import { createPortal } from "react-dom";
import * as styles from "./Modal.css";
import Button from "../button/Button";
import { BUTTON_TYPES } from "../../constants/buttonTypes";

const Modal = ({ isOpen, title, message, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.message}>{message}</p>
        <Button type={BUTTON_TYPES.GAME} onClick={onClose}>
          닫기
        </Button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
