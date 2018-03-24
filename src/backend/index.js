const express = require('express')
const path = require('path')
const app = express()

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/react', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3004, () => console.log('Example app listening on port 3000!'))
