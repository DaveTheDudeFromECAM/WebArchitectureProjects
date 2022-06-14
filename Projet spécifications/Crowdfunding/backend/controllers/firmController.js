const db = require('../models/index');
const Category = db.Category;
const Firm = db.Firm;
const Investor = db.Investor;
const Project = db.Project;

exports.firmList = async function (req, res) {
    await Firm.findAll()
        .then(data => {
            console.log("All categories:", JSON.stringify(data, null, 2));
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}

exports.firmCreate = async (req, res) => {
    let firm = Firm.build({ name: req.body.name, info: req.body.info })
    await firm.save()
        .then(data => {
            console.log(firm.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}

exports.firmUpdate = async function (req, res) {
    if (req.params.firm_id > 0) {
        await Firm.update(
            { name: req.body.name, info: req.body.info },
            { where: { firm_id: req.params.firm_id } }
        )
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'Firm not found' })
}

exports.firmDelete = async function (req, res) {
    if (req.params.firm_id) {
        await Firm.destroy({ where: { firm_id: req.params.firm_id } })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'firm not found' })
}

exports.firmFindById = async function (req, res) {
    if (req.params.firm_id) {
        await Firm.findOne({ where: { firm_id: req.params.firm_id }})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'firm not found' })
}
exports.firmAddProject = async function (req, res) {
    if (req.params.firm_id) {
        await Firm.findOne({ where: { firm_id: req.params.firm_id } })
            .then(firm => {
                firm.addProject(req.body.project_id).then(()=> {
                    res.json({message: 'Done'})
                })
            }).catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'firm not found' })
}
exports.firmRemoveProject = async function (req, res) {
    if (req.params.firm_id) {
        await Firm.findOne({ where: { firm_id: req.params.firm_id } })
            .then(firm => {
                firm.removeProject(req.body.project_id).then(()=> {
                    res.json({message: 'Done'})
                })
            }).catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'firm not found' })
}

const { Op } = require("sequelize");
exports.firmFindByName = async function (req, res) {
    if (req.params.name) {
        await Firm.findAll({
            where: {name:{ [Op.startsWith]: req.params.name}}})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'Bad input' })
}