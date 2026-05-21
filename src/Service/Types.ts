export interface Categoria {
  id: number
  tipoPlano: string
  tempoRevisao: string
  produto?: CategoriaProdutoResumo[]
}

export interface CategoriaProdutoResumo {
  id: number
  nome?: string
  modelo?: string
  marca?: string
}

export interface CreateCategoriaDto {
  tipoPlano: string
  tempoRevisao: string
}

export interface UpdateCategoriaDto {
  id: number
  tipoPlano: string
  tempoRevisao: string
}

export interface Produto {
  id: number
  modelo: string
  marca: string
  ano: number
  valorBase: number
  categoria: Categoria
}

export interface CreateProdutoDto {
  modelo: string
  marca: string
  ano: number
  valorBase: number
  categoria: {
    id: number
  }
}

export interface UpdateProdutoDto {
  id: number
  modelo: string
  marca: string
  ano: number
  valorBase: number
  categoria: {
    id: number
  }
}

export interface Usuario {
  id: number
  nome: string
  email: string
  senha: string
  contratos?: Contrato[]
}

export interface CreateUsuarioDto {
  nome: string
  email: string
  senha: string
}

export interface UpdateUsuarioDto {
  id: number
  nome: string
  email: string
  senha: string
}

export interface CreateContratoDto {
  produtoId: number
  categoriaId: number
  usuarioId: number
  ano: number
  data: string
}

export interface Contrato {
  id: number
  produto: Produto
  categoria: Categoria
  usuario: Usuario
  ano: number
  data: string
  valorContrato: number
}

export interface ApiDeleteResponse {
  message?: string
}

export interface ApiErrorResponse {
  message?: string | string[]
  error?: string
  statusCode?: number
}