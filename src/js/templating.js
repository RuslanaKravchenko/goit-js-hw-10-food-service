import menu from '../menu.json';
import item from '../templates/menu-item.hbs';

const galleryRef = document.querySelector('.js-menu');
const markup = item(menu);
galleryRef.insertAdjacentHTML('beforeend', markup);
