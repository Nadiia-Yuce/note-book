export function createProductsMarkup(data) {
  return data
    .map(
      ({ title, price, description }) => `
    <li>
  <h3>${title}</h3>
  <p>${price}</p>
  <p>${description}</p>
</li>`
    )
    .join('');
}
