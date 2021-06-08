const tables = require('./Tables.js')
const waiting = require('./waiting.js')
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/api/tables', (req, res) => {
  res.json(tables)
})

app.get('/api/waitlist', (req, res) => {
  res.json(waiting)
})
app.get('/tables', (req, res) => {
  res.sendFile(path.join(__dirname, './public/tables.html'))
})
app.get('/reserve', (req, res) => {
  res.sendFile(path.join(__dirname, './public/reserve.html'))
})

// app.post('/Tables.js', (req,res)=>{
//   let reservation = {
//     customerName: ,
//     customerEmail: ,
//     customerID: ,
//     phoneNumber: 
//   }
// })

app.listen(3000)

