const express = require('express')
const router = express.Router()

const Generator = require('../../utils/generateSID')
const Users = require('../../dataRef/users')
const Session = require('../../dataRef/session_id')

const sidLength = 15

// Show log in page
router.get('/', (req, res) => {
  res.render('login')
})

// Log in and show result page
router.post('/', (req, res) => {
  const { email, password } = req.body
  const userFind = Users.filter(user => user.email === email)
  // user email is unique, filter got only 0/1 result

  // user email not yet exist: show email error
  if (userFind.length === 0) {
    const errEmail = 'Invalid Email, please try again!'
    return res.render('login', { errEmail, email })
  }

  // user email exists, but wrong password: show password error
  if (userFind.length === 1 && userFind[0].password !== password) {
    const errPassword = 'Invalid password, please try again!'
    return res.render('login', { errPassword, email })
  }

  // email and password correct
  if (userFind.length === 1 && userFind[0].password === password) {
    const SID = Generator(sidLength)
    Session[SID] = userFind[0]
    res.cookie('SID', SID)
    return res.redirect('../')
  }
})

module.exports = router
