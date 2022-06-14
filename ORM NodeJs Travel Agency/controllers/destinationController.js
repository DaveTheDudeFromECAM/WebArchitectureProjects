const db = require('../models/index');
const Destination = db.Destination;

exports.destinationList = async function (req, res) {
    await Destination.findAll()
        .then(data => {
            console.log("All destinations:", JSON.stringify(data, null, 2));
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}

exports.destinationCreate = async function (req, res) {
    let destination = Destination.build({ name: req.body.name, description: req.body.description, agence_id: req.body.agence_id, payes: req.body.payes })
    await destination.save()
        .then(data => {
            console.log(destination.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
    // or user.create in one time
}

exports.destinationUpdate = async function (req, res) {
    if (req.params.destination_id > 0) {
        await Destination.update(
            { name: req.body.name, description: req.body.description, payes: req.body.payes },
            { where: { destination_id: req.params.destination_id } }
        )
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'Destination not found' })
}

exports.destinationDelete = async function (req, res) {
    if (req.params.destination_id) {
        await Destination.destroy({ where: { destination_id: req.params.destination_id } })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'Destination not found' })
}

exports.destinationFindOne = async function (req, res) {
    if (req.params.destination_id) {
        await Destination.findOne({ where: { destination_id: req.params.destination_id } })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'Destination not found' })
}

const { Op } = require("sequelize");
exports.destinationFindOp = async function (req, res) {
    await Destination.findAll({
        where: {
            destination_id:
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

exports.destinationOrder = async function (req, res) {
    await Destination.findAll({ order: ['name'] })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}