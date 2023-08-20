const { Restaurant, Category } = require('../models')

const adminServices = {
  getRestaurants: (req, cb) => {
    Restaurant.findAll({
      raw: true,
      nest: true,
      include: [Category]
    })
      .then(data => cb(null, { data }))
      .catch(err => cb(err))
  }
}

module.exports = adminServices
