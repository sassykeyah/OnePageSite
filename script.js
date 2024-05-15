


// Assuming you have an array of items to search through
const items = ["Apple", "Banana", "Cherry", "Orange", "Pear"];

function searchItems(query) {
    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
    );
    // Display or manipulate the filtered items as needed
    console.log(filteredItems);
}

const searchInput = document.querySelector(".search-bar"); // Updated selector
searchInput.addEventListener("input", () => {
    const query = searchInput.value;
    searchItems(query);
});