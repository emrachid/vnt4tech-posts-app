import axios from 'axios';

axios.defaults.baseURL = 'https://my-todo-list-15256-default-rtdb.firebaseio.com';

axios.interceptors.response.use(response => {
    console.log(response)
    // This function will execute when status code lie within the range 2xx
    // Firebase will always return 200 for success. 
    // So, anything different is considered an error.
    if (response.status !== 200) {
        return Promise.reject('Request failed with status code ' + response.status);
    }

    return response;
}, error => {
    alert('Ops!!! Something wrong happened\n\n' + error);
    return Promise.reject(error);
});