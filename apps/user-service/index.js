const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())

app.get('/user', (req, res) => {
  res.json({ id: 1, username: 'user', email: 'user@example.com' })
})

app.listen(PORT, () => console.log(`User service running on port ${PORT}`))
