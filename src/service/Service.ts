import type {
  Categoria,
  Contrato,
  CreateContratoDto,
  CreateUsuarioDto,
  Produto,
  Usuario,
} from './contratoTypes'


const API_URL = 'https://savedrive.gbworks.com.br'

async function apiRequest<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })

  if (!response.ok) {
    let message = `Erro na requisição: ${response.status}`

    try {
      const errorBody = await response.json()
      message = errorBody.message || errorBody.error || message
    } catch {
      const text = await response.text()
      if (text) message = text
    }

    throw new Error(message)
  }

  return response.json()
}

export const contratoApi = {
  findUsuarios(): Promise<Usuario[]> {
    return apiRequest<Usuario[]>('/usuarios')
  },

  createUsuario(usuario: CreateUsuarioDto): Promise<Usuario> {
    return apiRequest<Usuario>('/usuarios', {
      method: 'POST',
      body: JSON.stringify(usuario),
    })
  },

  findCategorias(): Promise<Categoria[]> {
    return apiRequest<Categoria[]>('/categorias')
  },

  findProdutos(): Promise<Produto[]> {
    return apiRequest<Produto[]>('/produtos')
  },

  createProduto(produto: Omit<Produto, 'id'>): Promise<Produto> {
    return apiRequest<Produto>('/produtos', {
      method: 'POST',
      body: JSON.stringify(produto),
    })
  },

  updateProduto(produto: Produto): Promise<Produto> {
    return apiRequest<Produto>('/produtos', {
      method: 'PUT',
      body: JSON.stringify(produto),
    })
  },

  deleteProduto(id: number): Promise<{ message: string }> {
    return apiRequest<{ message: string }>(`/produtos/${id}`, {
      method: 'DELETE',
    })
  },

  findContratos(): Promise<Contrato[]> {
    return apiRequest<Contrato[]>('/contratos')
  },

  createContrato(dto: CreateContratoDto): Promise<Contrato> {
    return apiRequest<Contrato>('/contratos', {
      method: 'POST',
      body: JSON.stringify(dto),
    })
  },

  deleteContrato(id: number): Promise<{ message: string }> {
    return apiRequest<{ message: string }>(`/contratos/${id}`, {
      method: 'DELETE',
    })
  },
}

export function getCategoriaNome(categoria?: Categoria | null) {
  if (!categoria) return 'Sem categoria'

  return (
    categoria.nome ||
    categoria.tipoPlano ||
    `Categoria #${categoria.id}`
  )
}

export function getCategoriaDescricao(categoria?: Categoria | null) {
  if (!categoria) return 'Sem descrição.'

  return (
    categoria.descricao ||
    categoria.tempoRevisao ||
    'Categoria cadastrada na API.'
  )
}

export function formatMoney(value: number) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}