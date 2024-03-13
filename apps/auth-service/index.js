const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.post('/login', (req, res) => {
  const { username, password } = req.body
  if (username === 'user' && password === 'password') {
    res.json({ message: 'Authentification réussie' })
  } else {
    res.status(401).json({ message: "Échec de l'authentification" })
  }
})

app.listen(PORT, () => console.log(`Auth service running on port ${PORT}`))
