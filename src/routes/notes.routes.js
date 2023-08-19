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
notesRoutes.get("/:id", /*myMiddleware,*/ notesController.show)
notesRoutes.delete("/:id", /*myMiddleware,*/ notesController.delete)


module.exports = notesRoutes