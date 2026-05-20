export interface Categoria {
  id: number
  nome?: string
  descricao?: string
  tipoPlano?: string
  tempoRevisao?: string
}

export interface Produto {
  id: number
  modelo: string
  marca: string
  ano: number
  valorBase: number
  categoria: Categoria
}

export interface Usuario {
  id: number
  nome: string
  email?: string
  senha?: string
}

export interface CreateUsuarioDto {
  nome: string
  email: string
  senha: string
}

export interface CreateContratoDto {
  produtoId: number
  categoriaId: number
  usuarioId: number
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