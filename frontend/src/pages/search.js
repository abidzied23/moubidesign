function Search(element) {
    //const searchInput = document.getElementById(element).value;
    console.log(element)

    fetch(`http://localhost:5000/search/${element}`)
        .then(response => response.json())
        .then(data => {

            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
export default Search;