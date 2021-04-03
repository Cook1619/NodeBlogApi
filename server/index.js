const express = require('express')
const app = express()
const port = 3000

const { apiRouter } = require('./api');

app.use('/api', apiRouter);

// Respond with Hello World! on the homepage:
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`App listening at http://localhost:${port} 🚀`))