const express = require('express')
const router = express.Router()

import * as user from '../controllers/user'

/* GET home page. */
router.get('/express', function (req, res, next) {
  res.send({ title: 'Express' })
})

/* GET users listing. */
router.get('/user', user.getUserInfo)
module.exports = router
