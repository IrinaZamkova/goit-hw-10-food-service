import menu from './menu.json';
import menuTemplate from './gallery.hbs';




const galleryRef = document.querySelector('.js-menu');

const markup = menuTemplate(menu)
galleryRef.insertAdjacentHTML('beforeend', markup);

console.log(markup )