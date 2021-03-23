const router = require('express').Router()
const { Category, Product } = require('../models')

// The `/api/categories` endpoint

router.get('/categories', (req, res) => {
  // find all categories
  Category.findAll({})
    .then(categories => res.json(categories))
    .catch(err => console.log(err))
  // be sure to include its associated Products
  //ask during office hours
})

router.get('/categories/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({ where: { id: req.params.id } })
    .then(category => res.json(category))
    .catch(err => console.log(err))
  // be sure to include its associated Products
  //Ask during office hours!
})

router.post('/categories', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then(category => res.json(category))
    .catch(err => console.log(err))
})

router.put('/categories/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

router.delete('/categories/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router
