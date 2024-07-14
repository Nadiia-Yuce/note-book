import { refs } from './refs';
import { getProductById } from './requests/products';
import { createSingleProductMarkup } from './services/markupService';

export async function handlerSingleProductSubmit(event) {
  try {
    event.preventDefault();
    const id = event.target.elements.id.value.trim();
    if (!id) return;
    const result = await getProductById(id);

    refs.singleProduct.innerHTML = createSingleProductMarkup(result);
    event.target.reset();
  } catch (error) {
    console.error(error.message);
  }
}
