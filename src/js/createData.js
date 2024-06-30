import { nanoid } from 'nanoid';
export function createData(evt) {
  const data = { id: nanoid() };
  new FormData(evt.currentTarget).forEach((value, key) => {
    data[key] = value;
  });
  return data;
}
