import { refs } from './refs';
import { createNewProduct } from './requests/products';
import { createSingleProductMarkup } from './services/markupService';

export async function handlerNewProductSubmit(e) {
  try {
    e.preventDefault();
    const data = {};
    new FormData(e.target).forEach((value, key) => {
      data[key] = value;
    });

    const newProduct = await createNewProduct(data);

    refs.newProductSection.innerHTML = createSingleProductMarkup(newProduct);
  } catch (error) {
    console.log(error.message);
  }
}
