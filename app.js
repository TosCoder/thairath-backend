const express = require('express')
const cors = require('cors')

const axios = require('axios');

const port = process.env.port || 3001

const app = express()

app.use(cors())
app.use(express.json({ extended : false }))
app.use(require('./routes/public.route'))
app.use(require('./routes/admin.route'))

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});