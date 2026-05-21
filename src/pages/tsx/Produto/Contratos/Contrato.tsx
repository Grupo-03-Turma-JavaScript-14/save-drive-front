import { useEffect, useState } from 'react'

import '../../../css/Produto/Contratos/ContratoPage.css'

import Loading from '../../../../components/Loading/Loading'
import Topbar from './Components/Topbar'
import LeftBar from './Components/LeftBar'
import RightBar from './Components/RightBar'
import DownBar from './Components/DownBar'

import { contratoApi } from '../../../../Service/Service'

import type {
  Categoria,
  Contrato as ContratoType,
  CreateContratoDto,
  CreateProdutoDto,
  CreateUsuarioDto,
  Produto,
  UpdateProdutoDto,
  Usuario,
} from '../../../../Service/Types'

function Contrato() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [contratos, setContratos] = useState<ContratoType[]>([])

  const [produtoSelecionado, setProdutoSelecionado] =
    useState<Produto | null>(null)

  const [usuarioSelecionado, setUsuarioSelecionado] =
    useState<Usuario | null>(null)

  const [loading, setLoading] = useState(true)
  const [toast, setToast] = useState<string | null>(null)
  const [errorToast, setErrorToast] = useState<string | null>(null)

  useEffect(() => {
    carregarDados()
  }, [])

  async function carregarDados() {
    try {
      setLoading(true)

      const [produtosData, categoriasData, usuariosData, contratosData] =
        await Promise.all([
          contratoApi.findProdutos(),
          contratoApi.findCategorias(),
          contratoApi.findUsuarios(),
          contratoApi.findContratos(),
        ])

      setProdutos(produtosData)
      setCategorias(categoriasData)
      setUsuarios(usuariosData)
      setContratos(contratosData)

      setProdutoSelecionado(produtosData[0] ?? null)
      setUsuarioSelecionado(usuariosData[0] ?? null)
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Erro ao carregar dados da API.'

      mostrarErro(message)
    } finally {
      setLoading(false)
    }
  }

  function mostrarSucesso(message: string) {
    setToast(message)

    setTimeout(() => {
      setToast(null)
    }, 3000)
  }

  function mostrarErro(message: string) {
    setErrorToast(message)

    setTimeout(() => {
      setErrorToast(null)
    }, 3500)
  }

  async function criarUsuario(usuario: CreateUsuarioDto) {
    try {
      const novoUsuario = await contratoApi.createUsuario(usuario)
      const usuariosAtualizados = await contratoApi.findUsuarios()

      setUsuarios(usuariosAtualizados)
      setUsuarioSelecionado(novoUsuario)

      mostrarSucesso(`Usuário #${novoUsuario.id} criado e selecionado.`)
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Erro ao criar usuário.'

      mostrarErro(message)
      throw error
    }
  }

  async function criarProduto(produto: CreateProdutoDto) {
    try {
      const novoProduto = await contratoApi.createProduto(produto)
      const produtosAtualizados = await contratoApi.findProdutos()

      setProdutos(produtosAtualizados)
      setProdutoSelecionado(novoProduto)

      mostrarSucesso('Veículo cadastrado com sucesso.')
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Erro ao cadastrar veículo.'

      mostrarErro(message)
    }
  }

  async function atualizarProduto(produto: UpdateProdutoDto) {
    try {
      const produtoAtualizado = await contratoApi.updateProduto(produto)
      const produtosAtualizados = await contratoApi.findProdutos()

      setProdutos(produtosAtualizados)

      setProdutoSelecionado((produtoAtual) => {
        if (produtoAtual?.id === produtoAtualizado.id) {
          return produtoAtualizado
        }

        return produtoAtual
      })

      mostrarSucesso('Veículo atualizado com sucesso.')
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Erro ao atualizar veículo.'

      mostrarErro(message)
    }
  }

  async function deletarProduto(id: number) {
    try {
      await contratoApi.deleteProduto(id)

      const produtosAtualizados = await contratoApi.findProdutos()

      setProdutos(produtosAtualizados)

      setProdutoSelecionado((produtoAtual) => {
        if (produtoAtual?.id === id) {
          return produtosAtualizados[0] ?? null
        }

        return produtoAtual
      })

      mostrarSucesso('Veículo removido com sucesso.')
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Erro ao remover veículo.'

      mostrarErro(message)
    }
  }

  async function criarContrato(dto: CreateContratoDto) {
    try {
      const contratoCriado = await contratoApi.createContrato(dto)
      const contratosAtualizados = await contratoApi.findContratos()

      setContratos(contratosAtualizados)

      mostrarSucesso(`Contrato #${contratoCriado.id} emitido com sucesso.`)
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Erro ao emitir contrato.'

      mostrarErro(message)
    }
  }

  async function deletarContrato(id: number) {
    try {
      await contratoApi.deleteContrato(id)

      const contratosAtualizados = await contratoApi.findContratos()

      setContratos(contratosAtualizados)

      mostrarSucesso('Contrato removido com sucesso.')
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Erro ao remover contrato.'

      mostrarErro(message)
    }
  }

  if (loading) {
    return <Loading />
  }

  return (
    <main className="contrato-page">
      {toast && <div className="contrato-toast success">{toast}</div>}
      {errorToast && <div className="contrato-toast error">{errorToast}</div>}

      <Topbar onRefresh={carregarDados} />

      <section className="contrato-main-grid">
        <LeftBar
          produtos={produtos}
          categorias={categorias}
          produtoSelecionado={produtoSelecionado}
          onSelectProduto={setProdutoSelecionado}
          onCreateProduto={criarProduto}
          onUpdateProduto={atualizarProduto}
          onDeleteProduto={deletarProduto}
        />

        <RightBar
          categorias={categorias}
          usuarios={usuarios}
          produtoSelecionado={produtoSelecionado}
          usuarioSelecionado={usuarioSelecionado}
          onSelectUsuario={setUsuarioSelecionado}
          onCreateUsuario={criarUsuario}
          onCreateContrato={criarContrato}
          onUpdateProduto={atualizarProduto}
        />
      </section>

      <DownBar
        contratos={contratos}
        onDeleteContrato={deletarContrato}
      />
    </main>
  )
}

export default Contrato