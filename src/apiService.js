const myKey = '21938998-67fd96e5d4868b12a769f8729'

const query = async (search, counter) => {
    const picture = await fetch(`https://pixabay.com/api/?key=${myKey}&image_type=photo&orientation=horizontal&q=${search}&page=${counter}&per_page=12`);
        return picture.json();
};

export default query;

