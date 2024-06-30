function add(data) {
  const array = getAll();
  array.push(data);
  localStorage.setItem('ls-k', JSON.stringify(array));
}
function getAll() {
  return JSON.parse(localStorage.getItem('ls-k')) || [];
}

export const localStorageAPI = { add, getAll };
