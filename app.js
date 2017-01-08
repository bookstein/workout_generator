const express = require('express')
const app = express()
const db = require('./db/knex')
const workoutsRouter = require('./workouts')
const exercisesRouter = require('./exercises')

app.get("/", (req, res) => {
    res.json({"msg":"time for a workout! head on over to http://localhost:3000/exercises"})
})

app.use("/workouts", workoutsRouter)
app.use("/exercises", exercisesRouter)

app.listen(3000, () => {
    console.log('Visit http://localhost:3000')
})