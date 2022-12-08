const AppError = require("../utils/AppError")

const sqliteConnection = require("../database/sqlite")

class UsersController {
  /* No máximo 5 métodos
   index - GET para listar vários registros
   show - GET para exibir um registro específico
   create - POST para criar um registro
   update - PUT para atualizar um registro
   delete - DELETE para remover um registro
  */
  async create(request, response) {
    const {name, email, password } = request.body

    const database = await sqliteConnection()
    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])
    if(checkUserExists){
      throw new AppError("Esse email já está em uso")
    }
    return response.status(201).json()

  }
}

module.exports = UsersController