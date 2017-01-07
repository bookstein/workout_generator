const express = require('express')
const router = express.Router()
const app = express()
const db = require('./db/knex')

app.get("/", (req, res) => {
    res.json({"msg":"time for a workout!"})
})

router.get("/", (req, res) => {
    // get all workouts here
    const rows = db.select('*').from('exercises')
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err)
        })
})

app.use("/workouts", router)

app.listen(3000, () => {
    console.log('Visit http://localhost:3000')
})