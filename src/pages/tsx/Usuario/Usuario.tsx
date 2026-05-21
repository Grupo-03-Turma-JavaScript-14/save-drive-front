import { useEffect, useState } from "react"
import '../../css/Usuario/Usuario.css'
import CardUsuario from "../../../components/cardusuario/CardUsuario"
import UserModal from "../../../components/user/UserModal"
import DeleteConfirm from "../../../components/modalpopup/DeleteConfirm"
import { createUser, deleteUser, fetchUsers, updateUser } from "../../../services/api"
import type { UserData, UserPayload } from "../../../services/api"

    type Usuario = UserData
    type UsuarioForm = UserPayload & { id?: number }

function Usuario () {

    const [usuarios, setUsuarios] = useState<Usuario[]>([])


    const [modalVisible, setModalVisible] = useState(false)
    const [editingUser, setEditingUser] = useState<Usuario | null>(null)
    const [deleteVisible, setDeleteVisible] = useState(false)
    const [toDeleteId, setToDeleteId] = useState<number | null>(null)
    const [filterName, setFilterName] = useState("")
    const [filterEmail, setFilterEmail] = useState("")
    const [sortBy, setSortBy] = useState<'id'|'nome'|'email'>('id')
    const [sortOrder, setSortOrder] = useState<'asc'|'desc'>('asc')

    useEffect(() => {
        async function loadUsers() {
            try {
                const data = await fetchUsers()
                setUsuarios(data)
            } catch (error) {
                console.error("Erro ao carregar usuários", error)
            }
        }

        loadUsers()
    }, [])

    function openCreate() {
        setEditingUser(null)
        setModalVisible(true)
    }

    function openEdit(id: number) {
        const u = usuarios.find((x) => x.id === id) ?? null
        setEditingUser(u)
        setModalVisible(true)
    }

    async function handleSave(user: UsuarioForm) {
        try {
            if (user.id) {
                const updated = await updateUser(user.id, {
                    nome: user.nome,
                    email: user.email,
                    senha: user.senha,
                })
                setUsuarios((prev) => prev.map((u) => (u.id === updated.id ? updated : u)))
            } else {
                const created = await createUser({
                    nome: user.nome,
                    email: user.email,
                    senha: user.senha,
                })
                setUsuarios((prev) => [...prev, created])
            }
        } catch (error) {
            console.error("Erro ao salvar usuário", error)
        } finally {
            setModalVisible(false)
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
            await deleteUser(toDeleteId)
            setUsuarios((prev) => prev.filter((u) => u.id !== toDeleteId))
        } catch (error) {
            console.error("Erro ao excluir usuário", error)
        } finally {
            setDeleteVisible(false)
            setToDeleteId(null)
        }
    }

    return (
        <>
        <div className="usuarios-container">

            <div className="usuarios-header-wrapper">
  
                <div className="usuarios-header">
                    <div className="titulo-area">
                        <h1>Usuários</h1>

                      <p>
                        Gerencie todos os usuários cadastrados na plataforma
                      </p>
                    
                      <p className="usuarios-total">
                        Total de usuários: {usuarios.length}
                      </p>
                    </div>
                    
                    <button className="btn-criar" onClick={openCreate}>
                      + Novo Usuário
                    </button>
                  </div>
                    
                </div>

            <div className="usuarios-filtros" style={{ width: '100%', maxWidth: 1200, marginBottom: 16 }}>
                <input placeholder="Pesquisar por nome" value={filterName} onChange={(e) => setFilterName(e.target.value)} />
                <input placeholder="Pesquisar por email" value={filterEmail} onChange={(e) => setFilterEmail(e.target.value)} />
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'id'|'nome'|'email')} style={{ padding: '10px 12px', borderRadius: 8 }}>
                    <option value="id">Ordenar por ID</option>
                    <option value="nome">Ordenar por Nome</option>
                    <option value="email">Ordenar por Email</option>
                </select>
                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value as 'asc'|'desc')} style={{ padding: '10px 12px', borderRadius: 8 }}>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
            </div>

            <div className="usuarios-grid">    

                {usuarios
                    .filter((u) => u.nome.toLowerCase().includes(filterName.toLowerCase()))
                    .filter((u) => u.email.toLowerCase().includes(filterEmail.toLowerCase()))
                    .slice()
                    .sort((a, b) => {
                        const dir = sortOrder === 'asc' ? 1 : -1
                        if (sortBy === 'id') return (a.id - b.id) * dir
                        if (sortBy === 'nome') return a.nome.localeCompare(b.nome, 'pt-BR', { sensitivity: 'base' }) * dir
                        return a.email.localeCompare(b.email, 'pt-BR', { sensitivity: 'base' }) * dir
                    })
                    .map((usuario) => (
                    <CardUsuario
                    key={usuario.id}
                    usuario={usuario}
                    onEditar={openEdit}
                    onDeletar={openDelete}
                    />
                ))}
            </div>
        </div>

        <UserModal visible={modalVisible} user={editingUser} onSave={handleSave} onClose={() => setModalVisible(false)} />
        <DeleteConfirm visible={deleteVisible} message={"Confirma a exclusão deste usuário?"} onConfirm={confirmDelete} onCancel={() => setDeleteVisible(false)} />
        </>
    )

}

export default Usuario