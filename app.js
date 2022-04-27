// Import modules and set relative variables
const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const Router = require('./routes')

const app = express()
const port = 3000



// Set view Engine
app.engine('handlebars', hbs.engine())
app.set('view engine', 'handlebars')

// Middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(Router)

// Listen the server
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})
