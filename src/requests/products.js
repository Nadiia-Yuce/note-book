import { apiInstance } from '../services/api';

export async function getAllProducts() {
  return (await apiInstance.get('/products')).data;
}

export async function getProductById(id) {
  return (await apiInstance.get(`/products/${id}`)).data;
}

export async function createNewProduct(obj) {
  return (await apiInstance.post('/products/add', obj)).data;
}


export async function deleteProductById(id) {
  return await apiInstance.delete(`/products/${id}`);
}