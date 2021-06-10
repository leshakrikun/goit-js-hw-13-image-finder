import 'regenerator-runtime/runtime'
import './sass/main.scss';
import query from './apiService.js'
import cardTemplates from './cards.hbs'

let markup; // разметка
let counter = 0;
let checkSearch = '';


const searchElem = document.querySelector('input');
const loadMoreBtn = document.querySelector('.more');

function fetchQuery () {
    const search = searchElem.value.trim();
    counter += 1;
    if(checkSearch !== search){
        counter=1;
    }

    if(counter===1) {
      checkSearch = search;
      
       if (document.querySelector('.gallery')) {
            document.querySelector('.gallery').remove();
          }
    }
    if (search.length===0){
        return;
    } else {
    const promise = query(search, counter);
    promise.then(picture => draw(picture))
    }
    
}

function draw(picture) {
        
    if (!document.querySelector('.gallery')) {
        const ulElemNew = '<ul class="gallery"></ul>';
        loadMoreBtn.insertAdjacentHTML('beforeBegin', ulElemNew);
    } 
    markup = cardTemplates(picture.hits);
     document.querySelector('.gallery').insertAdjacentHTML('beforeEnd', markup);
        if(picture.total/counter>12) {
            loadMoreBtn.classList.remove('hidden')
        } else {
            loadMoreBtn.classList.add('hidden')
        };
        document.querySelector('.more').scrollIntoView({behavior: 'smooth', block: 'end'});
} 
function scroll () {
    loadMoreBtn.scrollIntoView({behavior: 'smooth', block: 'end'});
}

const showBtn = document.querySelector('.submit');

showBtn.addEventListener('click', fetchQuery);

loadMoreBtn.addEventListener('click', () => {
    fetchQuery ();
    setTimeout(() => {
        scroll(); 
      }, 1000);
});

