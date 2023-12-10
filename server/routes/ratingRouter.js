const Router = require('express')
const router = new Router()

const ratingController = require('../controllers/ratingController')

// ------- Добавил проверку на авторизацию для того, чтобы вытащить оттуда авторизованного юзера -------- //
const authMiddleware = require('../middleware/authMiddleware')

// ------- CRUD корзины ------- //
router.get('/', ratingController.getIsSetRating)
router.post('/', authMiddleware , ratingController.addRating)
router.delete('/', authMiddleware, ratingController.removeRating)
router.get('/:id', ratingController.getRating)
 

module.exports = router
