import React, { useEffect, useState } from "react";
import Modal from "../Modalpopup/Modal";

interface Category {
  id?: number;
  tipoPlano: string;
  tempoRevisao: string;
  produto?: { id: number; nome: string }[];
}

interface Props {
  visible: boolean;
  categoria?: Category | null;
  onSave: (c: Category) => void;
  onClose: () => void;
}

export default function CategoryModal({ visible, categoria, onSave, onClose }: Props) {
  const [tipoPlano, setTipoPlano] = useState("");
  const [tempoRevisao, setTempoRevisao] = useState("");

  useEffect(() => {
    setTipoPlano(categoria?.tipoPlano ?? "");
    setTempoRevisao(categoria?.tempoRevisao ?? "");
  }, [categoria, visible]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    onSave({ id: categoria?.id, tipoPlano, tempoRevisao });
  }

  const title = categoria && categoria.id ? "Editar Categoria" : "Nova Categoria";

  return (
    <Modal visible={visible} onClose={onClose} title={title}>
      <form onSubmit={submit}>
        <div className="form-row">
          <label>Tipo de Plano</label>
          <input value={tipoPlano} onChange={(e) => setTipoPlano(e.target.value)} />
        </div>

        <div className="form-row">
          <label>Tempo de Revisão</label>
          <input value={tempoRevisao} onChange={(e) => setTempoRevisao(e.target.value)} />
        </div>

        <div className="modal-actions">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cancelar
          </button>
          <button type="submit" className="btn btn-primary">
            Salvar
          </button>
        </div>
      </form>
    </Modal>
  );
}
