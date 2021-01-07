const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// dentro da pasta atual, no qual sever.js está
// sirva os arquivos estáticos (html, js, fontes etc.)
app.use(express.static('.'))

// transforma em objeto os dados
// que vêm a partir de um submit do formulário
app.use(bodyParser.urlencoded({ extended: true }))

// transforma json em objeto
app.use(bodyParser.json())

app.get('/test', (req, res) => res.send('ok'))

app.listen(8080, () => console.log('executando'))
