// 01 

function formatDate(date) {
    const d = (new Date(date) + '').split(' ');
    d[2] = d[2] + ',';

    return [d[0], d[1], d[2], d[3]].join(' ');
}

const date = Date.parse(' 06 Jan,2022');
console.log(formatDate(date));

