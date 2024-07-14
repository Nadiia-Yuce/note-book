import './styles/normalize.css';
import './styles/index.css';
import { getAllProducts } from './requests/products';
import { createProductsMarkup } from './services/markupService';
import { refs } from './refs';

async function renderProducts() {
  try {
    const allProducts = await getAllProducts();
    refs.allProducts.insertAdjacentHTML(
      'beforeend',
      createProductsMarkup(allProducts.products)
    );
  } catch (error) {
    console.log(error);
  }
}

renderProducts();
