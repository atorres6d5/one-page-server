const express = require('express')
const app = express()
const port = 3000

const listener = () => console.log(`Party on Garth ${port}!`)
app.listen(port, listener)

app.get('/ping', (req, res) => {
  const message = 'pong!'
  console.log(`ON THE SERVER: ${message}`)
  res.setHeader('content-type', 'text/html');
  res.send(`<h1>Now you're cooking with oil!</h1>`)
})
