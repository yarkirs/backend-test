const express   = require('express');
const app       = express();
const pug       = require('pug')
const PORT      = 5000;

// public имя для папки статики (img, js, css)
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Start server on port: ${PORT}`)
})
// Задаём шаблонизатор
// app.set('view engine', 'pug')

// Отлавливание URL, можно делать навигацию по страницам
app.get('/', (req, res) => {
    res.render('index.html')
})


