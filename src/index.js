import './styles/normalize.css';
import './styles/index.css';
import { getAllProducts } from './requests/products';
import { createProductsMarkup } from './services/markupService';
import { refs } from './refs';
import { handlerSingleProductSubmit } from './handlerSingleProductSubmit';
import { handlerNewProductSubmit } from './handlerNewProductSubmit';

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

// renderProducts();

refs.singleProductForm.addEventListener('submit', handlerSingleProductSubmit);

// post newProduct
refs.newProduct.addEventListener('submit', handlerNewProductSubmit);
