const service = require('../services/public.service')
const controller = {}

controller.getAll = async (req, res) => {
        try {
            console.log('get!!!!')
            const response = await service.getAll()
            res.status(200).json(response)
        }
        catch(err) {
            res.status(500).json(err)
        }
}




module.exports = controller;