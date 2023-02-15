
const models = require('../models/product')



exports.createuser = async (req, res) => {
    console.log(req.body)

    try {
        const savedData = await new models(req.body).save();
        res.json(savedData)
    }

    catch (err) {
        res.json(err)
    }


}





exports.getUser = async (req, res) => {



    try {

        const savedData = await models.find();
        res.json(savedData)
    }

    catch (err) {
        res.json(err)
    }
}