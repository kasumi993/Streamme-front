import global from '../main'

export default (url) => new Promise((res, rej) => {
    global.$http.get(url)
        .then((response) => {
            res(response.data);
        })
        .catch((error) => {
            console.log(error);
            rej(error);
        });
})