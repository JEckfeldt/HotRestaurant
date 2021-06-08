const tables = require('tableArray')
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api/tables', (req, res) => {
  res.json(tables)
})

app.get('/api/waiting', (req, res) => {
  res.json(waitlist)
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

