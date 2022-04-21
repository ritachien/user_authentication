const express = require('express')
const router = express.Router()

// Show log in page
router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router
