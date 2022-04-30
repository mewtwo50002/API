const app = require('express')();
const PORT= 8080;

app.listen(
  PORT,
  () => console.log("its alive on https://API.mewtwo50002.repl.co")
)

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Interwebs')
})

app.get('/skins', (req, res) => {
  res.status(200),
  res.json()
    })

app.get('/skins/epic', (req, res) => {
  res.status(200),
  res.json()
    })

app.get('/skins/uncommon', (req, res) => {
  res.status(200),
  res.json()
    })

app.get('/skins/Legendary', (req, res) => {
  res.status(200),
  res.json()
    })