const express = require('express')
const adminController = require('../../controllers/admin-controller')
const upload = require('../../middleware/multer')

const router = express.Router()

router.get('/restaurants/create', adminController.createRestaurant)
router.get('/restaurants/:id/edit', adminController.editRestaurant)
router.get('/restaurants/:id', adminController.getRestaurant)
router.put('/restaurants/:id', upload.single('image'), adminController.putRestaurant)
router.delete('/restaurants/:id', adminController.deleteRestaurant)
router.get('/restaurants', adminController.getRestaurants)
router.post('/restaurants', upload.single('image'), adminController.postRestaurant)
router.use('/', (req, res) => res.redirect('/admin/restaurants'))

module.exports = router
