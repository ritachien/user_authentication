// Import modules and set relative variables
const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')

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

// Set view Engine
app.engine('handlebars', hbs.engine())
app.set('view engine', 'handlebars')

// Middleware
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const emailExist = users.filter(user => user.email === email)

  // user email is unique, filter got only 0/1 result
  if (emailExist.length === 0) {
    const errEmail = 'Invalid Email, please try again!'
    res.render('index', { errEmail, email })
  } else if (emailExist[0].password !== password) {
    const errPassword = 'Invalid password, please try again!'
    res.render('index', { errPassword, email })
  } else {
    const userName = emailExist[0].firstName
    res.render('index', { userName })
  }
})

// Listen the server
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})
