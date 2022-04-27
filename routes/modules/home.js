const express = require('express')

const Session = require('../../dataRef/session_id')
const router = express.Router()


// Show log in page
router.get('/', (req, res) => {
  const { SID } = req.cookies
  const user = Session[SID]

  if (user) {
    return res.render('index', { user })
  } else {
    return res.render('index')
  }
})

module.exports = router
