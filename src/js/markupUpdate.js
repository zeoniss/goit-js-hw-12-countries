import resultCountry from '../templates/resultCountry.hbs';
import { fetchError, foundError, successQuery } from './notifications.js';


function updateMarkup(data) {
    if (data.length === 1) {
        MarkupOne(data);
        successQuery();
        return;
    }
    if (data.length > 10) {
        foundError();
        return;
    } else {
        fetchError();
        return;
    }
}

function MarkupOne(data) {
    const markup = resultCountry(data);
    refs.container.insertAdjacentHTML('beforeend', markup);
}
export default updateMarkup;