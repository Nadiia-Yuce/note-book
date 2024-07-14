import { apiInstance } from '../services/api';

export async function getAllProducts() {
  return (await apiInstance.get('/products')).data;
}
