var express = require('express')
var router = express.Router()
const db = require('./db/knex')

router.get("/", (req, res) => {
    db.select('*').from('workouts')
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err)
        })
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    db.select('*').from('workouts').where('id', id)
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err)
        })
})

module.exports = router