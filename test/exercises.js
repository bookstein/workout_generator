const test = require('tap').test
const request = require('supertest')
const express = require('express')
const exercisesRouter = require('../exercises')

test('create new exercise', (t) => {
    t.plan(1)

    var app = express()
    app.use(exercisesRouter)

    request(app)
      .post('/new')
      .type('form')
      .send({ name: 'bench press', type: 'upper', weight: 'heavy' })
      .expect(201)
      .then((res) => {
        t.equal(res.status, 201)
      })
      .catch((err) => {
        t.fail(err)
      })
})