import global from '../main'

export default (query) => new Promise((res, rej) => {
    global.$http.get(`/search/movie?query=${query}`)
        .then((response) => {
            res(response.data.results);
        })
        .catch((error) => {
            console.log(error);
            rej(error);
        });
})