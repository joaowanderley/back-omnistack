const express = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer.js')

const routes = express.Router()
const BoxController = require('./controllers/boxController')
const FileController = require('./controllers/fileController')

routes.get('/', (req, res) => {
  return res.send('Bem vindo à NiggAPI')
})

routes.post('/boxes', BoxController.store)
routes.get('/boxes/:id', BoxController.show)
routes.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store)

module.exports = routes