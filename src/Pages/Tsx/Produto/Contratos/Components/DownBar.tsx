import {
  formatMoney,
  getCategoriaNome,
} from '../../../../../Service/Service'
import type { Contrato } from '../../../../../Service/Types'
import '../../../../css/Produto/Contratos/DownBar.css'

interface DownBarProps {
  contratos: Contrato[]
  onDeleteContrato: (id: number) => void
}

function DownBar({ contratos, onDeleteContrato }: DownBarProps) {
  return (
    <section className="downbar">
      <div className="downbar-header">
        <div>
          <span>Histórico</span>
          <h2>Contratos ativos</h2>
          <p>
            Lista centralizada de contratos emitidos com usuário, veículo, valor
            e desconto.
          </p>
        </div>

        <strong>{contratos.length}</strong>
      </div>

      <div className="downbar-list">
        {contratos.map((contrato) => {
          const valorBase = Number(contrato.produto.valorBase)
          const valorContrato = Number(contrato.valorContrato)
          const desconto = valorBase - valorContrato
          const teveDesconto = desconto > 0

          return (
            <article key={contrato.id} className="downbar-card">
              <div className="downbar-card-main">
                <div className="downbar-id">#{contrato.id}</div>

                <div>
                  <h3>
                    {contrato.produto.marca} {contrato.produto.modelo}
                  </h3>

                  <p>
                    Usuário: <strong>{contrato.usuario.nome}</strong>
                  </p>

                  <div className="downbar-tags">
                    <span>Ano {contrato.ano}</span>
                    <span>{getCategoriaNome(contrato.categoria)}</span>
                    <span>
                      {new Date(contrato.data).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="downbar-values">
                <div>
                  <small>Valor base</small>
                  <strong>{formatMoney(valorBase)}</strong>
                </div>

                <div>
                  <small>Valor contrato</small>
                  <strong>{formatMoney(valorContrato)}</strong>
                </div>

                <div className={teveDesconto ? 'has-discount' : 'no-discount'}>
                  <small>Desconto</small>
                  <strong>
                    {teveDesconto ? formatMoney(desconto) : 'Não aplicado'}
                  </strong>
                </div>
              </div>

              <button type="button" onClick={() => onDeleteContrato(contrato.id)}>
                Excluir
              </button>
            </article>
          )
        })}

        {contratos.length === 0 && (
          <div className="downbar-empty">
            <strong>Nenhum contrato ativo.</strong>
            <p>Emita uma apólice no painel da direita para visualizar aqui.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default DownBar