const express = require('express')
const path = require('path')

const app = express()

const publicPath = path.resolve(__dirname, './public')
const registerPath = path.resolve(__dirname, './views/register.html')
const loginPath = path.resolve(__dirname, './views/login.html')
app.use(express.static(publicPath))

app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor corriendo en el puerto 3000')
})

app.get('/', (req, res) => {
    res.sendfile(path.resolve(__dirname, './views/home.html'))
})

app.get('/registro', (req, res) => res.sendfile(registerPath))

app.get('/ingreso', (req, res) => res.sendfile(loginPath))