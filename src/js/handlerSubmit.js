import { createData } from './createData';

export function handlerSubmit(evt) {
  evt.preventDefault();
  const data = createData(evt);
  console.log(data);
}
