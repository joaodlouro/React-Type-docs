import axios from "axios";

export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    timeout: 1000,
})


//lembrar dessa forma
//url apenas em um local, facilitando tudo!
//da para usar headers específicos e mais...