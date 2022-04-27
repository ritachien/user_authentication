const express = require('express')
const router = express.Router()

const Session = require('../../dataRef/session_id')

router.post('/', (req, res) => {
  const cookieSID = req.cookies.SID
  res.clearCookie('SID')
  delete Session[cookieSID]
  return res.redirect('../')
})

module.exports = router
