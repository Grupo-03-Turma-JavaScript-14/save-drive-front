import { useEffect, useMemo, useState } from 'react'

import CardUsuario from '../../../../components/Cardusuario/CardUsuario'
import UserModal from '../../../../components/User/UserModal'
import DeleteConfirm from '../../../../components/Modalpopup/DeleteConfirm'

import { contratoApi } from '../../../../Service/Service'
import type {
  CreateUsuarioDto,
  UpdateUsuarioDto,
  Usuario as UsuarioType,
} from '../../../../Service/Types'

import '../../../css/Produto/Usuario/Usuario.css'

type UsuarioForm = CreateUsuarioDto & {
  id?: number
}

function Usuario() {
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([])
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState('')

  const [modalVisible, setModalVisible] = useState(false)
  const [editingUser, setEditingUser] = useState<UsuarioType | null>(null)

  const [deleteVisible, setDeleteVisible] = useState(false)
  const [toDeleteId, setToDeleteId] = useState<number | null>(null)

  const [filterName, setFilterName] = useState('')
  const [filterEmail, setFilterEmail] = useState('')
  const [sortBy, setSortBy] = useState<'id' | 'nome' | 'email'>('id')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  useEffect(() => {
    loadUsers()
  }, [])

  async function loadUsers() {
    try {
      setLoading(true)
      setErro('')

      const data = await contratoApi.findUsuarios()
      setUsuarios(data)
    } catch (error) {
      console.error('Erro ao carregar usuários:', error)
      setErro('Não foi possível carregar os usuários.')
    } finally {
      setLoading(false)
    }
  }

  function openCreate() {
    setEditingUser(null)
    setModalVisible(true)
  }

  function openEdit(id: number) {
    const usuario = usuarios.find((item) => item.id === id) ?? null
    setEditingUser(usuario)
    setModalVisible(true)
  }

  async function handleSave(user: UsuarioForm) {
    try {
      setErro('')

      if (user.id) {
        const payload: UpdateUsuarioDto = {
          id: user.id,
          nome: user.nome,
          email: user.email,
          senha: user.senha,
        }

        const updated = await contratoApi.updateUsuario(payload)

        setUsuarios((prev) =>
          prev.map((item) => (item.id === updated.id ? updated : item)),
        )

        setModalVisible(false)
        setEditingUser(null)
        return
      }

      const payload: CreateUsuarioDto = {
        nome: user.nome,
        email: user.email,
        senha: user.senha,
      }

      const created = await contratoApi.createUsuario(payload)

      setUsuarios((prev) => [...prev, created])
      setModalVisible(false)
      setEditingUser(null)
    } catch (error) {
      console.error('Erro ao salvar usuário:', error)
      setErro('Não foi possível salvar o usuário.')
    }
  }

  function openDelete(id: number) {
    setToDeleteId(id)
    setDeleteVisible(true)
  }

  async function confirmDelete() {
    if (toDeleteId == null) {
      setDeleteVisible(false)
      return
    }

    try {
      setErro('')

      await contratoApi.deleteUsuario(toDeleteId)

      setUsuarios((prev) =>
        prev.filter((usuario) => usuario.id !== toDeleteId),
      )
    } catch (error) {
      console.error('Erro ao excluir usuário:', error)
      setErro('Não foi possível excluir o usuário.')
    } finally {
      setDeleteVisible(false)
      setToDeleteId(null)
    }
  }

  const usuariosFiltrados = useMemo(() => {
    return usuarios
      .filter((usuario) =>
        usuario.nome.toLowerCase().includes(filterName.toLowerCase()),
      )
      .filter((usuario) =>
        usuario.email.toLowerCase().includes(filterEmail.toLowerCase()),
      )
      .slice()
      .sort((a, b) => {
        const dir = sortOrder === 'asc' ? 1 : -1

        if (sortBy === 'id') {
          return (a.id - b.id) * dir
        }

        if (sortBy === 'nome') {
          return (
            a.nome.localeCompare(b.nome, 'pt-BR', {
              sensitivity: 'base',
            }) * dir
          )
        }

        return (
          a.email.localeCompare(b.email, 'pt-BR', {
            sensitivity: 'base',
          }) * dir
        )
      })
  }, [usuarios, filterName, filterEmail, sortBy, sortOrder])

  const editingUserModal = editingUser
    ? {
        ...editingUser,
        email: editingUser.email ?? '',
        senha: editingUser.senha ?? '',
      }
    : null

  return (
    <>
      <div className="usuarios-container">
        <div className="usuarios-header-wrapper">
          <div className="usuarios-header">
            <div className="titulo-area">
              <h1>Usuários</h1>

              <p>Gerencie todos os usuários cadastrados na plataforma</p>

              <p className="usuarios-total">
                Total de usuários: {usuarios.length}
              </p>
            </div>

            <button className="btn-criar" onClick={openCreate}>
              + Novo Usuário
            </button>
          </div>
        </div>

        <div
          className="usuarios-filtros"
          style={{ width: '100%', maxWidth: 1200, marginBottom: 16 }}
        >
          <input
            placeholder="Pesquisar por nome"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
          />

          <input
            placeholder="Pesquisar por email"
            value={filterEmail}
            onChange={(e) => setFilterEmail(e.target.value)}
          />

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as 'id' | 'nome' | 'email')
            }
            style={{ padding: '10px 12px', borderRadius: 8 }}
          >
            <option value="id">Ordenar por ID</option>
            <option value="nome">Ordenar por Nome</option>
            <option value="email">Ordenar por Email</option>
          </select>

          <select
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value as 'asc' | 'desc')
            }
            style={{ padding: '10px 12px', borderRadius: 8 }}
          >
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>

        {loading && <p>Carregando usuários...</p>}

        {erro && (
          <p style={{ color: 'red', marginBottom: 16 }}>
            {erro}
          </p>
        )}

        {!loading && usuariosFiltrados.length === 0 && (
          <p>Nenhum usuário encontrado.</p>
        )}

        <div className="usuarios-grid">
          {usuariosFiltrados.map((usuario) => (
            <CardUsuario
              key={usuario.id}
              usuario={{
                ...usuario,
                email: usuario.email ?? '',
                senha: usuario.senha ?? '',
              }}
              onEditar={openEdit}
              onDeletar={openDelete}
            />
          ))}
        </div>
      </div>

      <UserModal
        visible={modalVisible}
        user={editingUserModal}
        onSave={handleSave}
        onClose={() => {
          setModalVisible(false)
          setEditingUser(null)
        }}
      />

      <DeleteConfirm
        visible={deleteVisible}
        message="Confirma a exclusão deste usuário?"
        onConfirm={confirmDelete}
        onCancel={() => {
          setDeleteVisible(false)
          setToDeleteId(null)
        }}
      />
    </>
  )
}

export default Usuario