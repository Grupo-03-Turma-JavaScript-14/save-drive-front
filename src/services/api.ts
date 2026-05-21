import axios from "axios";

export interface UserPayload {
  nome: string;
  email: string;
  senha: string;
}

export interface UserData extends UserPayload {
  id: number;
}

export interface CategoryPayload {
  tipoPlano: string;
  tempoRevisao: string;
}

export interface CategoryData extends CategoryPayload {
  id: number;
  produto?: { id: number; nome: string }[];
}

const api = axios.create({
  baseURL: "https://savedrive.gbworks.com.br",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function fetchUsers(): Promise<UserData[]> {
  const response = await api.get<UserData[]>("/usuarios");
  return response.data;
}

export async function createUser(payload: UserPayload): Promise<UserData> {
  const response = await api.post<UserData>("/usuarios", payload);
  return response.data;
}

export async function updateUser(id: number, payload: UserPayload): Promise<UserData> {
  const response = await api.put<UserData>(`/usuarios/${id}`, payload);
  return response.data;
}

export async function deleteUser(id: number): Promise<void> {
  await api.delete(`/usuarios/${id}`);
}

export async function fetchCategories(): Promise<CategoryData[]> {
  const response = await api.get<CategoryData[]>("/categorias");
  return response.data;
}

export async function createCategory(payload: CategoryPayload): Promise<CategoryData> {
  const response = await api.post<CategoryData>("/categorias", payload);
  return response.data;
}

export async function updateCategory(id: number, payload: CategoryPayload): Promise<CategoryData> {
  const response = await api.put<CategoryData>(`/categorias/${id}`, payload);
  return response.data;
}

export async function deleteCategory(id: number): Promise<void> {
  await api.delete(`/categorias/${id}`);
}

export default {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
  fetchCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
