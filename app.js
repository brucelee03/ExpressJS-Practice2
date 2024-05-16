const addDays = require('date-fns/addDays')
const express = require('express')
const app = express()

app.get('/', (request, response) => {
  let todayDate = new Date()
  let date = addDays(new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate()), 100);
  response.send(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
});
module.exports = app;