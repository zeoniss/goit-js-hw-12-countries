import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/Angeler.css';
import { defaults } from '@pnotify/core';
import { error, alert } from '@pnotify/core';

function fetchError() {
    error({
        title: 'Oh No!',
        text: `Such country doesn't exist`,
        delay: 1000,
    });
}

function foundError() {
    error({
        title: 'Too many matches found!',
        text: 'Please, create more specific query',
        delay: 1000,
    });
}

function successQuery() {
    alert({
        title: 'Success',
        delay: 1000,
    });
}


defaults.styling = 'angeler';
defaults.icons = 'angeler';
export { fetchError, foundError, successQuery };