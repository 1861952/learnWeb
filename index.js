const path = require('path')
const cors = require('cors')
const express = require('express')
const res = require('express/lib/response')
const app = express()
const PORT = 8888
app.listen(PORT, () => console.log(`hello world from nodejs at port ${PORT}`))

// app.use(cors())
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())
app.get('/', (req, res) => {
    console.log(__dirname)
    console.log('received request from browser client')
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    console.log('I received a post request from client')
    console.log(req.body)
    if(req.body.password === '12345') console.log('you can come in')
    else console.log('you are not allowed here')
})

app.get('/about', (req, res) => {
    // res.send('this is about me')
    res.sendFile(__dirname + '/about.html')
})
