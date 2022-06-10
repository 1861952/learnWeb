const title = document.querySelector('.title')
const button = document.querySelector('button')
const input = document.querySelector('input')

button.addEventListener('click', () => {
    // const axios = require("axios");
    console.log(input.value)
    // Send a POST request
    axios({
        method: 'post',
        url: 'http://localhost:8888',
        data: {
            firstName: 'Fred',
            lastName: 'Flintstone',
            password: input.value,
        }
    });
})