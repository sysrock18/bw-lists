const express = require('express')
const router = express.Router()

const mongoose = require('../config/database')
const List = require('../models/List')

router.post('/list/operate', (req, res, next) => {
  if (req.body._id === "") {
    const list = new List({
      eventType: req.body.eventType,
      destination: req.body.destination,
      date: req.body.date
    })
    
    list.save()
  } else {
    List.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, (err, model) => {
      if (err) throw err
    })
  }
  res.redirect('/')
})

module.exports = router
