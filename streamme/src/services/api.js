import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmVhY2U2MDk2OGQwMzg5NDQ1NTE1YTA1ZjdlM2NhNSIsInN1YiI6IjYyM2IzNmU2YjQyMjQyMDA0NzJiYzBmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nsTDgk4CcaD6Qe5WV0VnumjCCTC-RdPZY4qB8GEKL-c';

export default axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Authorization: `Bearer ${token}`,
    }
})