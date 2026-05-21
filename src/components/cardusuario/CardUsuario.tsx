import './CardUsuario.css'

interface Usuario {
    id: number
    nome: string
    email: string
    senha: string
}

interface CardUsuarioProps {
    usuario: Usuario
    onEditar?: (id: number) => void
    onDeletar?: (id: number) => void
}

function CardUsuario({ usuario, onEditar, onDeletar }: CardUsuarioProps) {
    return (
        <div className="card-usuario">
            <div className="card-header">
                <h2>{usuario.nome}</h2>

                <span className="usuario-id">
                    ID #{usuario.id}
                </span>
            </div>

            <div className="card-body">
                <div className="info-group">
                    <p className="label">Email</p>
                    <p className="valor">{usuario.email}</p>
                </div>

                <div className="info-group">
                    <p className="label">Senha</p>
                    <p className="valor senha">
                        {usuario.senha}
                    </p>
                </div>
            </div>

            <div className="card-footer">
                <button className="btn-editar" onClick={() => onEditar?.(usuario.id)}>
                    Editar
                </button>

                <button className="btn-deletar" onClick={() => onDeletar?.(usuario.id)}>
                    Deletar
                </button>
            </div>
        </div>
    )
}

export default CardUsuario