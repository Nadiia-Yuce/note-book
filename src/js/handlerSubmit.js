import { createCardMarkup } from './createCardMarkup';
import { createData } from './createData';
import { localStorageAPI } from './localStorageAPI';
import { refs } from './refs';

export function handlerSubmit(evt) {
  evt.preventDefault();
  const data = createData(evt);
  console.log(data);
  localStorageAPI.add(data);
  refs.taskList.insertAdjacentHTML('beforeend', createCardMarkup(data));
}
