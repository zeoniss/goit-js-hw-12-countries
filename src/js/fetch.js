import { fetchError } from './notifications.js';

function fetch(searchQuery) {
    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
    return fetch(url)
        .then(response => response.json())
        .then(data => data)
        .catch(() => fetchError());
}
export default fetch;