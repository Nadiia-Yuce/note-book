export function createData(evt) {
  const data = {};
  new FormData(evt.currentTarget).forEach((value, key) => {
    data[key] = value;
  });
  return data;
}
