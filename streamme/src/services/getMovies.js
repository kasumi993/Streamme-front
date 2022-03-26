import global from '../main'

export default (url, pageNumber = getRandomInt(4)) => new Promise((res, rej) => {
    global.$http.get(`${url}?page=${pageNumber}`)
        .then((response) => {
            res(response.data.results);
        })
        .catch((error) => {
            console.log(error);
            rej(error);
        });
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}