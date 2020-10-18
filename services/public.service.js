const service = {}
const newsMock = require('../mocks/news.json')

service.getAll = async () => {
        try {
            return newsMock
        }
        catch(err) {
            return err 
        }
}


module.exports = service;