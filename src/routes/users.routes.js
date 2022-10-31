const { Router } = require("express") 

const usersRoutes = Router()

app.post("/users", (request, response) => {
  const {name, email, password } = request.body


  response.send(`Usuário: ${name} - E-mail: ${email} - Senha: ${password}`)
})