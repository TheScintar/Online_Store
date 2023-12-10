const {Rating, Device } = require("../models/models")
const jwt = require('jsonwebtoken')
const { Sequelize } = require('sequelize');

class ratingController {
    // ------ CRUD корзины ------ //

    async addRating(req,res){
        const user = req.user
        const {index, deviceId} = req.body;
        const numericDeviceId = parseInt(deviceId, 10);
        const rating = await Rating.create(
            {
                rate: index,
                userId: user.id,
                deviceId: numericDeviceId
            }
            )
        return res.json(rating)
    }

    async getRating(req, res){
        const {id} = req.params
        const rating = await Rating.findOne({
            attributes: [
                [Sequelize.fn('AVG', Sequelize.col('rate')), 'averageRating']
            ],
            where: {
                deviceId: id
            }
        });
        return res.json(rating)
    }

    async getIsSetRating(req,res){
        let {id, userToken} = req.query
        const decodedToken = jwt.decode(userToken)
        const userId = decodedToken.id
        console.log(userId)
        console.log(decodedToken)
        const numericDeviceId = parseInt(id, 10);
        const rating = await Rating.findAll(
            {
                where: {
                    deviceId: numericDeviceId,
                    userId: userId
                    }
            }
        )
        return res.json(rating)
        }

    async removeRating(req,res){
        try {
            console.log(req.body)
            const {id}  = req.body
            const basket = await BasketDevice.destroy({
                where: {
                    id: id
                }
            });
            return res.json(basket);
        } catch (error) {
            console.error('Ошибка при удалении из корзины:', error);
            return res.status(500).json({ error: 'Произошла ошибка при удалении из корзины' });
        }
    }
}
module.exports = new ratingController()