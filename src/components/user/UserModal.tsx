import React, { useEffect, useState } from "react";
import Modal from "../modalpopup/Modal";

interface User {
  id?: number;
  nome: string;
  email: string;
  senha: string;
}

interface Props {
  visible: boolean;
  user?: User | null;
  onSave: (user: User) => void;
  onClose: () => void;
}

export default function UserModal({ visible, user, onSave, onClose }: Props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    setNome(user?.nome ?? "");
    setEmail(user?.email ?? "");
    setSenha(user?.senha ?? "");
  }, [user, visible]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    onSave({ id: user?.id, nome, email, senha });
  }

  const title = user && user.id ? "Editar Usuário" : "Novo Usuário";

  return (
    <Modal visible={visible} onClose={onClose} title={title}>
      <form onSubmit={submit}>
        <div className="form-row">
          <label>Nome</label>
          <input value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>

        <div className="form-row">
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-row">
          <label>Senha</label>
          <input value={senha} onChange={(e) => setSenha(e.target.value)} />
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
