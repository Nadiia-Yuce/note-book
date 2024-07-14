import { apiInstance } from '../services/api';

export async function getAllProducts() {
  return (await apiInstance.get('/products')).data;
}

export async function getProductById(id) {
  return (await apiInstance.get(`/products/${id}`)).data;
}
