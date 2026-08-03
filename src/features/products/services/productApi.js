import api from "../../../services/axios";

export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const getCategories = async () => {
  const response = await api.get("/products/category-list");
  return response.data;
};

export const searchProducts = async (query) => {
  const response = await api.get(`/products/search?q=${query}`);
  return response.data;
};