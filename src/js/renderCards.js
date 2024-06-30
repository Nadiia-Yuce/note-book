import { createCardMarkup } from './createCardMarkup';
import { localStorageAPI } from './localStorageAPI';
import { refs } from './refs';

export function renderCards() {
  refs.taskList.insertAdjacentHTML(
    'beforeend',
    localStorageAPI.getAll().map(createCardMarkup).join('')
  );
}
