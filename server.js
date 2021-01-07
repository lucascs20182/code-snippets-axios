const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// serve o conteúdo estático (html, js, fontes etc.)
// dentro da pasta atual, onde o server.js está
app.use(express.static('.'))

// transforma em objeto os dados
// que vêm a partir de um submit do formulário
app.use(bodyParser.urlencoded({ extended: true }))

// transforma json em objeto
app.use(bodyParser.json())

app.listen(8080, () => console.log('executando'))
