const { Device, BasketDevice } = require("../models/models")

class BasketController {
    // ------ CRUD корзины ------ //

    async addToBasket(req,res,next){
        const user = req.user
        const {deviceId} = req.body
        const basket = await BasketDevice.create({basketId : user.id, deviceId : deviceId})
        return res.json(basket)
    }

    async getBasketUser(req,res){

        const {id} = req.user
        const basket = await BasketDevice.findAll({include: {
                model: Device
            }, where: {
                basketId: id
            }})

        return res.json(basket)
    }

    async removeFromBasket(req,res){
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
module.exports = new BasketController()