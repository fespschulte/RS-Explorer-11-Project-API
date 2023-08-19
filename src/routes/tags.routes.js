const { Router } = require("express") 
const TagsController = require("../controllers/TagsController")
const tagsRoutes = Router()

// function myMiddleware(request, response, next) {
//   if(!request.body.isAdmin)
//     return 

//   next()

// }

const tagsController = new TagsController()

tagsRoutes.get("/:user_id", /*myMiddleware,*/ tagsController.index)


module.exports = tagsRoutes