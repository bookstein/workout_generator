const express = require('express')
const router = express.Router()
const db = require('./db/knex')
const bodyParser = require('body-parser').urlencoded({extended: true, type: '*/x-www-form-urlencoded'})

router.get("/new", (req, res) => {
    res.send(
        `
        <form action='new' method='post'>
            <input name='name' type='text' value='deadlift'>
            <input name='type' type='text' value='lower' >
            <input name='weight' type='text' value='heavy' >
            <br />
            <input type='submit'>
        </form>   
        `
    )
})

router.post("/new", bodyParser, (req, res) => {
    // need to do validation
    console.log('body ', req.body)
    const { name, type, weight } = req.body
    db('exercises')
        .returning('id')
        .insert({name, type, weight})
        .then((result) => {
            res.status(201).json(result)
        }).catch((err) => {
            console.log(err)
        })
})

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