import 'regenerator-runtime/runtime'
import './sass/main.scss';
import query from './apiService.js'
import cardTemplates from './cards.hbs'


const refs = {
    cardContainer: document.querySelector('.more')
}
const searchElem = document.querySelector('input');
const loadMoreBtn = document.querySelector('.more');
console.log(loadMoreBtn);
function fetchQuery () {
    const search = searchElem.value.trim();
    console.log(search);
    const promise = query(search);
    const q = promise.then(picture => draw(picture))
}

let markup;

function draw(picture) {
    markup = cardTemplates(picture.hits);
    refs.cardContainer.insertAdjacentHTML('beforeBegin', markup);
        if(picture.total>12) {
            loadMoreBtn.classList.remove('hidden')
        }
} 

//const search = document.getElementById('search-form').value;

const showBtn = document.querySelector('.submit')
showBtn.addEventListener('click', fetchQuery)

/* const element = document.getElementById('.more');
element.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});
 */