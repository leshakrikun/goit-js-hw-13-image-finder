const myKey = '21938998-67fd96e5d4868b12a769f8729'

const query = async () => {
    const picture = await fetch(`https://pixabay.com/api/?key=${myKey}&image_type=photo&orientation=horizontal&q=dog&page=1&per_page=12`);
        return picture.json();
};


/* const promise = query();
console.log(promise);
const q = promise.then(picture => console.log(picture));

const refs = {
    cardContainer: document.querySelector('body')
}




let markup = cardTemplates(q)
console.log(markup);
refs.cardContainer.innerHTML = markup; 


 */







export default query;

