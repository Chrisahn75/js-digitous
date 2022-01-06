// 01 

function formatDate(dateString) {
    const date = (new Date(dateString) + '').split(' ');
    date[2] = date[2] + ',';

    return [date[0], date[1], date[2], date[3]].join(' ');
}

const dateString = Date.parse(' 06 Jan,2022');
console.log(formatDate(dateString));

