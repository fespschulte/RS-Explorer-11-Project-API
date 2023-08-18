const { Router } = require("express") 
const NotesController = require("../controllers/NotesController")
const notesRoutes = Router()

// function myMiddleware(request, response, next) {
//   if(!request.body.isAdmin)
//     return 

//   next()

// }

const notesController = new NotesController()

notesRoutes.post("/:user_id", /*myMiddleware,*/ notesController.create)

module.exports = notesRoutes