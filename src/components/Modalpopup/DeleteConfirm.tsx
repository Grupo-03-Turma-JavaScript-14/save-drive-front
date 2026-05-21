import Modal from "./Modal";

interface Props {
  visible: boolean;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function DeleteConfirm({ visible, message = "Deseja confirmar?", onConfirm, onCancel }: Props) {
  return (
    <Modal visible={visible} onClose={onCancel} title="Confirmar exclusão">
      <p>{message}</p>
      <div className="modal-actions">
        <button className="btn btn-secondary" onClick={onCancel}>
          Cancelar
        </button>
        <button className="btn btn-primary" onClick={onConfirm}>
          Excluir
        </button>
      </div>
    </Modal>
  );
}
