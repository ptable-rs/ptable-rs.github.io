const DATA_URL = 'https://raw.githubusercontent.com/orhnk/pablo/master/db/periodic-table-lookup.json';
let ptable_db;

fetch(DATA_URL)
    .then(response => response.json())
    .then(data => {
        ptable_db = data;
    })
    .catch(error => {
        console.error('Error:', error);
        ptable_db = undefined; // Set ptable_db to undefined in case of error
    });