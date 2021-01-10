const bodyParser = require('body-parser')
const express = require('express')
const multer = require('multer')

const app = express()

// serve o conteúdo estático (html, js, fontes etc.)
// dentro da pasta atual, onde o server.js está
app.use(express.static('.'))

// transforma em objeto os dados
// que vêm a partir de um submit do formulário
app.use(bodyParser.urlencoded({ extended: true }))

// transforma json em objeto
app.use(bodyParser.json())

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './upload')
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.end('erro')
        }

        res.end('concluído com sucesso')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.listen(8080, () => console.log('executando'))
