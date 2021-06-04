import 'regenerator-runtime/runtime'
import './sass/main.scss';
import query from './apiService.js'
import cardTemplates from './cards.hbs'


const refs = {
    cardContainer: document.querySelector('body')
}

const promise = query();

const q = promise.then(picture => draw(picture))


let markup;

function draw(picture) {
  markup = cardTemplates(picture.hits);
  refs.cardContainer.insertAdjacentHTML('beforeend', markup);
} 



