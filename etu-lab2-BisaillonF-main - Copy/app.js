const express = require('express')
const path = require('path')

const app = express()

const dirname = path.resolve(path.dirname(''))

app.use('/dist', express.static(path.join(dirname, '/dist')))

app.use('/', (req, res) => {
  res.sendFile(path.join(dirname, '/public/index.html'))
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
