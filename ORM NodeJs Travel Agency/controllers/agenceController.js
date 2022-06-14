const db = require('../models/index');
const Agence = db.Agence;
const Destination = db.Destination;

exports.agenceList = async function (req, res) {
    await Agence.findAll({ include: [{model: Destination, as:'destinations'}] })
        .then(data => {
            console.log("All agencies:", JSON.stringify(data, null, 2));
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}

exports.agenceCreate = async (req, res) => {
    let agence = Agence.build({ name: req.body.name, email: req.body.email, phone: req.body.phone, adresse: req.body.adresse })
    await agence.save()
        .then(data => {
            console.log(agence.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
    // or user.create in one time
}

exports.agenceUpdate = async function (req, res) {
    if (req.params.agence_id > 0) {
        await Agence.update(
            { name: req.body.name, email: req.body.email, phone: req.body.phone, adresse: req.body.adresse },
            { where: { agence_id: req.params.agence_id } }
        )
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'Agence not found' })
}

exports.agenceDelete = async function (req, res) {
    if (req.params.agence_id) {
        await Agence.destroy({ where: { agence_id: req.params.agence_id } })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'Agence not found' })
}

exports.agenceFindOne = async function (req, res) {
    if (req.params.agence_id) {
        await Agence.findOne({ where: { agence_id: req.params.agence_id }, include: Destination })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'Agence not found' })
}
exports.agenceAddDestination = async function (req, res) {
    if (req.params.agence_id) {
        await Agence.findOne({ where: { agence_id: req.params.agence_id } })
            .then(agence => {
                agence.addDestination(req.body.destination_id).then(()=> {
                    res.json({message: 'Done'})
                })
            }).catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'Agence not found' })
}

const { Op } = require("sequelize");
exports.agenceFindOp = async function (req, res) {
    await Agence.findAll({
        where: {
            agence_id:
                { [Op.gt]: 2, [Op.lt]: 9 }
        }
    })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}

exports.agenceUpdate = async function (req, res) {
    if (req.params.agence_id > 0) {
        await Agence.update(
            { name: req.body.name }, 
            { where: { agence_id: req.params.agence_id } }
            )
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'Agence not found' })
}

exports.agenceDelete = async function (req, res) {
    if (req.params.agence_id) {
            await Agence.destroy({ where: { agence_id: req.params.agence_id } })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
    }
    else res.status(400).json({ message: 'Agence not found'})
}

exports.agenceFindOne = async function (req, res) {
    if (req.params.agence_id) {
        await Agence.findOne({ where: { agence_id: req.params.agence_id } })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'Agence not found' })
}

exports.agenceFindOp = async function (req, res) {
    await Agence.findAll({ 
        where: { agence_id : 
            { [Op.gt]:2, [Op.lt]:9 }
        } } )
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}