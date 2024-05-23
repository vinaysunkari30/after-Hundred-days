const addDays = require('date-fns/addDays')
const express = require('express')

const app = express()
let date = new Date()
let afterHun = addDays(date, 100)
let after = `${afterHun.getDate()}/${
  afterHun.getMonth() + 1
}/${afterHun.getFullYear()}`
app.get('/', (request, response) => {
  response.send(after)
})

app.listen(3000)

module.exports = app
