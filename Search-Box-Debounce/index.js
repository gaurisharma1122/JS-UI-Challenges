const searchBox = document.querySelector('.search-box');
const searchSuggestions = document.querySelector('.search-suggestions');

const data = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Quince',];

const debounce = (callback, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  }
}

const search = debounce((value) => {
  let suggestions = data.filter(item => item.toLowerCase().includes(value));
  updateSuggestions(suggestions);
}, 700);

searchBox.addEventListener('keyup', (e) => {
  search(e.target.value);
});

function updateSuggestions(suggestions) {
  searchSuggestions.innerHTML = '';
  for (let i in suggestions) {
    let li = document.createElement('li')
    li.textContent = suggestions[i];
    searchSuggestions.appendChild(li);
  }
}
