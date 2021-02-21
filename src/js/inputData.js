import debounce from 'lodash.debounce';
import fetch from './fetch.js';
import updateMarkup from './markupUpdate.js';

const refs = {
    input: document.querySelector('#countries'),
    container: document.querySelector('.contriesContainer'),
};
refs.input.addEventListener(
    'input',
    debounce(event => {
        event.preventDefault();
        const searchQuery = event.target.value;
        refs.container.innerHTML = '';
        fetch(searchQuery).then(updateMarkup);
    }, 1000),
);