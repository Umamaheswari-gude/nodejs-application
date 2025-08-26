import express from 'express'
const app = express()
const port = 3000

app.get('/', (_req, res) => {
  res.send('Hello Mahi! Welcome to the application')
})

app.get('/uma', (_req, res) => {
  res.send('Hello uma! Welcome to the application')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})