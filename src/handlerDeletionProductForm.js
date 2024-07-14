import {deleteProductById} from "./requests/products.js";

export async function handlerDeletionProductForm(event) {
  try {
    event.preventDefault();
    const id = event.target.elements.deletionId.value.trim();
    if (!id) return;
    const result = await deleteProductById(id);
    console.log(result)
  alert('Видалено')
    event.target.reset();
  } catch (error) {
    alert("Продукт не знайденно")
    console.error(error.message);
  }
}