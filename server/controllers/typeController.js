const {Type} = require('../models/models')
const ApiError = require('../error/ApiError');

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json({type})
    }

    async delete(req, res) {
        console.log(req.body)
        const {typeId} = req.body
        const type = await Type.destroy({
            where: {
                id: typeId
            }
        });
        return res.json(type);
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }

}

module.exports = new TypeController()