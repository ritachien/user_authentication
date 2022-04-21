// Import modules and set relative variables
const express = require('express')
const hbs = require('express-handlebars')

const app = express()
const port = 3000

// User authentication data
const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

// Routes
app.get('/', (req, res) => {
  res.send('login practice')
})

// Listen the server
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})
