import { createData } from './createData';
import { localStorageAPI } from './localStorageAPI';

export function handlerSubmit(evt) {
  evt.preventDefault();
  const data = createData(evt);
  console.log(data);
  localStorageAPI.add(data);
}
