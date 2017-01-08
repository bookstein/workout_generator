const express = require('express')
const router = express.Router()
const db = require('./db/knex')

router.get("/", (req, res) => {
    db.select('*').from('exercises')
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err)
        })
})

router.get("/:id", (req, res) => {
    const id = req.params.id // need to do validation
    db.select('*').from('exercises').where('id', id)
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err)
        })
})

module.exports = router