import { useEffect, useState } from "react";
import "../../css/Categoria/Categoria.css";
import CategoryModal from "../../../components/categoria/CategoriaModal";
import DeleteConfirm from "../../../components/modalpopup/DeleteConfirm";
import { CardCategoria } from "../../../components/cardcategoria/CardCategoria";
import {
  createCategory,
  deleteCategory,
  fetchCategories,  
  updateCategory,
} from "../../../services/api";
import type { CategoryData } from "../../../services/api";

interface Produto {
  id: number;
  nome: string;
}

type Categoria = CategoryData;
type CategoriaForm = {
  id?: number;
  tipoPlano: string;
  tempoRevisao: string;
  produto?: Produto[];
};

function Categorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [modalVisible, setModalVisible] = useState(false)
  const [editingCategoria, setEditingCategoria] = useState<Categoria | null>(null)
  const [deleteVisible, setDeleteVisible] = useState(false)
  const [toDeleteId, setToDeleteId] = useState<number | null>(null)
  const [filterTipo, setFilterTipo] = useState("")
  const [filterTempo, setFilterTempo] = useState("")
  const [sortBy, setSortBy] = useState<'tipoPlano'|'tempoRevisao'>('tipoPlano')
  const [sortOrder, setSortOrder] = useState<'asc'|'desc'>('asc')

  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await fetchCategories()
        setCategorias(data)
      } catch (error) {
        console.error("Erro ao carregar categorias", error)
      }
    }

    loadCategories()
  }, [])

  function openCreate() {
    setEditingCategoria(null)
    setModalVisible(true)
  }

  function openEdit(id: number) {
    const c = categorias.find((x) => x.id === id) ?? null
    setEditingCategoria(c)
    setModalVisible(true)
  }

  async function handleSave(cat: CategoriaForm) {
    try {
      if (cat.id) {
        const updated = await updateCategory(cat.id, {
          tipoPlano: cat.tipoPlano,
          tempoRevisao: cat.tempoRevisao,
        })
        setCategorias((prev) => prev.map((c) => (c.id === updated.id ? { ...c, ...updated } : c)))
      } else {
        const created = await createCategory({
          tipoPlano: cat.tipoPlano,
          tempoRevisao: cat.tempoRevisao,
        })
        setCategorias((prev) => [...prev, created])
      }
    } catch (error) {
      console.error("Erro ao salvar categoria", error)
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
      await deleteCategory(toDeleteId)
      setCategorias((prev) => prev.filter((c) => c.id !== toDeleteId))
    } catch (error) {
      console.error("Erro ao excluir categoria", error)
    } finally {
      setDeleteVisible(false)
      setToDeleteId(null)
    }
  }

  return (
    <>
      <div className="categorias-container">

        <div className="categorias-header-wrapper">

        {/* HEADER (igual estrutura do Usuario) */}
        <div className="categorias-header">

          <div className="titulo-area">
            <h1>Categorias</h1>

            <p>
              Gerencie todas as categorias cadastradas na plataforma
            </p>
            <p className="categorias-total">Total de categorias: {categorias.length}</p>
          </div>

          <button className="btn-criar" onClick={openCreate}>
            + Nova Categoria
          </button>

        </div>
      </div>

        {/* FILTROS */}
        <div className="categorias-filtros" style={{ width: '100%', maxWidth: 1200, marginBottom: 16 }}>
          <input placeholder="Filtrar por tipo de plano" value={filterTipo} onChange={(e) => setFilterTipo(e.target.value)} />
          <input placeholder="Filtrar por tempo de revisão" value={filterTempo} onChange={(e) => setFilterTempo(e.target.value)} />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'tipoPlano'|'tempoRevisao')} style={{ padding: '10px 12px', borderRadius: 8 }}>
            <option value="tipoPlano">Ordenar por Tipo de Plano</option>
            <option value="tempoRevisao">Ordenar por Tempo de Revisão</option>
          </select>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value as 'asc'|'desc')} style={{ padding: '10px 12px', borderRadius: 8 }}>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>

        {/* GRID */}
        <div className="categorias-grid">

          {categorias
            .filter((c) => c.tipoPlano?.toLowerCase().includes(filterTipo.toLowerCase()))
            .filter((c) => c.tempoRevisao?.toLowerCase().includes(filterTempo.toLowerCase()))
            .slice()
            .sort((a, b) => {
              const dir = sortOrder === 'asc' ? 1 : -1
              if (sortBy === 'tipoPlano') return (a.tipoPlano || '').localeCompare(b.tipoPlano || '', 'pt-BR', { sensitivity: 'base' }) * dir
              return (a.tempoRevisao || '').localeCompare(b.tempoRevisao || '', 'pt-BR', { sensitivity: 'base' }) * dir
            })
            .map((categoria) => (
              <CardCategoria
                key={categoria.id}
                categoria={categoria}
                onEditar={openEdit}
                onDeletar={openDelete}
              />
            ))}

        </div>

      </div>

      <CategoryModal visible={modalVisible} categoria={editingCategoria} onSave={handleSave} onClose={() => setModalVisible(false)} />
      <DeleteConfirm visible={deleteVisible} message={"Confirma a exclusão desta categoria?"} onConfirm={confirmDelete} onCancel={() => setDeleteVisible(false)} />
    </>
  );
}

export default Categorias;