import axios, { AxiosError } from 'axios'

import type {
  ApiDeleteResponse,
  ApiErrorResponse,
  Categoria,
  Contrato,
  CreateCategoriaDto,
  CreateContratoDto,
  CreateProdutoDto,
  CreateUsuarioDto,
  Produto,
  UpdateCategoriaDto,
  UpdateProdutoDto,
  UpdateUsuarioDto,
  Usuario,
} from './Types'

const API_URL = 'https://savedrive.gbworks.com.br'

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

function getApiErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<ApiErrorResponse>
    const data = axiosError.response?.data

    if (Array.isArray(data?.message)) {
      return data.message.join(', ')
    }

    if (data?.message) {
      return data.message
    }

    if (data?.error) {
      return data.error
    }

    if (axiosError.response?.status) {
      return `Erro na requisição: ${axiosError.response.status}`
    }

    return axiosError.message
  }

  if (error instanceof Error) {
    return error.message
  }

  return 'Erro inesperado na requisição.'
}

async function request<T>(callback: () => Promise<{ data: T }>): Promise<T> {
  try {
    const response = await callback()
    return response.data
  } catch (error) {
    throw new Error(getApiErrorMessage(error))
  }
}

export const contratoApi = {
  // =========================
  // USUÁRIOS
  // Backend:
  // GET    /usuarios
  // GET    /usuarios/:id
  // GET    /usuarios/nome/:nome
  // POST   /usuarios
  // PUT    /usuarios
  // DELETE /usuarios/:id
  // =========================

  findUsuarios(): Promise<Usuario[]> {
    return request(() => api.get<Usuario[]>('/usuarios'))
  },

  findUsuarioById(id: number): Promise<Usuario> {
    return request(() => api.get<Usuario>(`/usuarios/${id}`))
  },

  findUsuariosByNome(nome: string): Promise<Usuario[]> {
    return request(() => api.get<Usuario[]>(`/usuarios/nome/${nome}`))
  },

  createUsuario(usuario: CreateUsuarioDto): Promise<Usuario> {
    return request(() => api.post<Usuario>('/usuarios', usuario))
  },

  updateUsuario(usuario: UpdateUsuarioDto): Promise<Usuario> {
    return request(() => api.put<Usuario>('/usuarios', usuario))
  },

  deleteUsuario(id: number): Promise<ApiDeleteResponse> {
    return request(() => api.delete<ApiDeleteResponse>(`/usuarios/${id}`))
  },

  // =========================
  // CATEGORIAS
  // Backend:
  // GET    /categorias
  // GET    /categorias/:id
  // POST   /categorias
  // PUT    /categorias/:id
  // DELETE /categorias/:id
  // =========================

  findCategorias(): Promise<Categoria[]> {
    return request(() => api.get<Categoria[]>('/categorias'))
  },

  findCategoriaById(id: number): Promise<Categoria> {
    return request(() => api.get<Categoria>(`/categorias/${id}`))
  },

  createCategoria(categoria: CreateCategoriaDto): Promise<Categoria> {
    return request(() => api.post<Categoria>('/categorias', categoria))
  },

  updateCategoria(categoria: UpdateCategoriaDto): Promise<Categoria> {
    const { id, ...body } = categoria

    return request(() => api.put<Categoria>(`/categorias/${id}`, body))
  },

  deleteCategoria(id: number): Promise<ApiDeleteResponse> {
    return request(() => api.delete<ApiDeleteResponse>(`/categorias/${id}`))
  },

  // =========================
  // PRODUTOS
  // Backend:
  // GET    /produtos
  // GET    /produtos/:id
  // POST   /produtos
  // PUT    /produtos
  // DELETE /produtos/:id
  //
  // IMPORTANTE:
  // O backend espera categoria.id.
  // Não use categoriaId no update/create de produto.
  // =========================

  findProdutos(): Promise<Produto[]> {
    return request(() => api.get<Produto[]>('/produtos'))
  },

  findProdutoById(id: number): Promise<Produto> {
    return request(() => api.get<Produto>(`/produtos/${id}`))
  },

  createProduto(produto: CreateProdutoDto): Promise<Produto> {
    return request(() => api.post<Produto>('/produtos', produto))
  },

  updateProduto(produto: UpdateProdutoDto): Promise<Produto> {
    return request(() => api.put<Produto>('/produtos', produto))
  },

  updateProdutoCategoria(produto: Produto, categoriaId: number): Promise<Produto> {
    return request(() =>
      api.put<Produto>('/produtos', {
        id: produto.id,
        modelo: produto.modelo,
        marca: produto.marca,
        ano: produto.ano,
        valorBase: Number(produto.valorBase),
        categoria: {
          id: categoriaId,
        },
      }),
    )
  },

  deleteProduto(id: number): Promise<ApiDeleteResponse> {
    return request(() => api.delete<ApiDeleteResponse>(`/produtos/${id}`))
  },

  // =========================
  // CONTRATOS
  // Backend:
  // GET    /contratos
  // GET    /contratos/:id
  // POST   /contratos
  // DELETE /contratos/:id
  //
  // IMPORTANTE:
  // createContrato precisa de produtoId,
  // categoriaId, usuarioId, ano e data.
  // =========================

  findContratos(): Promise<Contrato[]> {
    return request(() => api.get<Contrato[]>('/contratos'))
  },

  findContratoById(id: number): Promise<Contrato> {
    return request(() => api.get<Contrato>(`/contratos/${id}`))
  },

  createContrato(dto: CreateContratoDto): Promise<Contrato> {
    return request(() => api.post<Contrato>('/contratos', dto))
  },

  deleteContrato(id: number): Promise<ApiDeleteResponse> {
    return request(() => api.delete<ApiDeleteResponse>(`/contratos/${id}`))
  },
}

export function getCategoriaNome(categoria?: Categoria | null) {
  if (!categoria) return 'Sem categoria'

  return categoria.tipoPlano || `Categoria #${categoria.id}`
}

export function getCategoriaDescricao(categoria?: Categoria | null) {
  if (!categoria) return 'Sem descrição.'

  return categoria.tempoRevisao || 'Categoria cadastrada na API.'
}

export function formatMoney(value: number | string) {
  return Number(value || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export function todayIsoDate() {
  return new Date().toISOString().split('T')[0]
}