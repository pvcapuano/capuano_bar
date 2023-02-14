import Modal from "react-modal";
import styles from "./styles.module.scss";

import { FiX } from "react-icons/fi";
import { OrderItemProps } from "../../pages/dashboard";

interface ModalOrderProps {
  isOpen: boolean;
  onRequestClose: () => void;
  order: OrderItemProps[];
}

export default function ModalOrder({
  isOpen,
  onRequestClose,
  order,
}: ModalOrderProps) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#586f7c",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
        style={{ background: "transparent", border: 0 }}
      >
        <FiX size={45} color="#f44748" />
      </button>

      <div className={styles.container}>
        <h2>Detalhes do pedido</h2>
        <span className={styles.table}>Mesa: {order[0].order.table}</span>

        {order.map((item) => (
          <section key={item.id} className={styles.containerItem}>
            <span>
              {item.amount} - {item.product.name}
            </span>
            <span className={styles.description}>
              {item.product.description}
            </span>
          </section>
        ))}

        <button className={styles.buttonOrder}>Concluir pedido</button>
      </div>
    </Modal>
  );
}
