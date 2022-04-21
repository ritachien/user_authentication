const express = require('express')
const router = express.Router()

const Users = require('../../users')

// Log in and shoe result page
router.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const emailExist = Users.filter(user => user.email === email)

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

module.exports = router
