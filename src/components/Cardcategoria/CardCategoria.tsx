import "./CardCategoria.css";

interface Produto {
  id: number;
  nome: string;
}

interface Categoria {
  id: number;
  tipoPlano: string;
  tempoRevisao: string;
  produto?: Produto[];
}

interface Props {
  categoria: Categoria;
  onEditar?: (id: number) => void;
  onDeletar?: (id: number) => void;
}

export function CardCategoria({ categoria, onEditar, onDeletar }: Props) {
  const { id, tipoPlano, tempoRevisao, produto = [] } = categoria;

  const produtosVisiveis = produto.slice(0, 3);
  const restante = produto.length - produtosVisiveis.length;

  const temProdutos = produto.length > 0;

  return (
    <div className="card-categoria">
      
      {/* HEADER */}
      <div className="card-header">
        <h2>{tipoPlano}</h2>

        <span className="categoria-id">
          ID #{id}
        </span>
      </div>

      {/* BODY */}
      <div className="card-body">
        
        <div className="info-group">
          <p className="label">Tempo de Revisão</p>
          <p className="valor">⏱ {tempoRevisao}</p>
        </div>

        <div className="info-group">
          <p className="label">Produtos</p>

          {!temProdutos ? (
            <p className="valor">Nenhum produto vinculado</p>
          ) : (
            <div className="valor">
              <p>{produto.length} produtos</p>

              <div className="produtos-lista">
                {produtosVisiveis.map((p) => (
                  <span key={p.id}>{p.nome}</span>
                ))}

                {restante > 0 && <span>+{restante}</span>}
              </div>
            </div>
          )}
        </div>

      </div>

      {/* FOOTER */}
      <div className="card-footer">
        <button onClick={() => onEditar?.(id)}>
          Editar
        </button>

        <button onClick={() => onDeletar?.(id)}>
          Deletar
        </button>
      </div>

    </div>
  );
}