const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json({brand})
    }

    async delete(req, res) {
        const {brandId} = req.body
        const brand = await Brand.destroy({
            where: {
                id: brandId
            }
        });
        return res.json(brand);
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

}

module.exports = new BrandController()