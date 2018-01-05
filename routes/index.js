var express = require('express')
var router = express.Router()

const mongoose = require('../config/database')
const List = require('../models/List')

router.get('/', function(req, res, next) {
  List.find((err, lists) => {
    if (err) throw err
    res.render('index', { lists })
  })
})

router.get('/list/new', (req, res, next) => {
  res.render('listForm', {})
})

router.get('/list/clients/:id', (req, res, next) => {
  res.render('clients', {})
})

router.get('/list/update/:id', (req, res, next) => {
  const listId = req.params.id
  List.findOne({ _id: listId }, (err, list) => {
    if (err) throw err
    res.render('listForm', { list })
  })
})

router.get('/list/delete/:id', (req, res, next) => {
  const listId = req.params.id
  List.remove({ _id: listId }, (err) => {
    if (err) throw err
    res.redirect('/')
  })
})

module.exports = router
