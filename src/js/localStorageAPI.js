function add(data) {
  const array = JSON.parse(localStorage.getItem('ls-k')) || [];
  array.push(data);
  localStorage.setItem('ls-k', JSON.stringify(array));
}

export const localStorageAPI = { add };
