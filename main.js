const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
var cors = require('cors')
var bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser())

const razas = require('./endpoints/razas.js')
const sintomas = require('./endpoints/sintomas.js')
const diagnosticos = require('./endpoints/diagnosticos.js')

app.get('/', (req, res, next) => {
  res.send('hola socio')
})

app.get('/razas',(req,res)=>{
  console.log(razas)
  res.send(JSON.stringify(razas))
  next()
})

app.get('/diagnosticos',(req,res)=>{
  console.log(diagnosticos)
  res.send(JSON.stringify(diagnosticos))
  next()
})

app.get('/sintomas',(req,res)=>{
  console.log(sintomas)
  res.send(JSON.stringify(sintomas))
  next()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
