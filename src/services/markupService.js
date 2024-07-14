export function createProductsMarkup(data) {
  return data.map(createSingleProductMarkup).join('');
}

export function createSingleProductMarkup({ title, price, description }) {
  return `
    <li>
  <h3>${title}</h3>
  <p>${price}</p>
  <p>${description}</p>
</li>`;
}
