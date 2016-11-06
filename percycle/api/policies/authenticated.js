/**
 * Arquivo: authenticated.js
 * Data: 05/11/2016
 * Author: Glaucia Lemos
 * @description :: Arquivo responsável por dar acesso e autenticação ao sistema
 *  ao usuário recém logado e cadastrado no sistema.
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = function(req, res, ok) {

  //Se o usuário for permitido, proceder a lógica para o controller
  if (req.session.authenticated) {
    return ok();
  }

  // Caso não seja usuário permitido....
  else {
     	var requireLoginError = [{
         name: 'requireLogin', 
         message: 'Você deve estar logado no sistema.'
      }]
      
      req.session.flash = {
     	  err: requireLoginError
     }
     res.redirect('/session/newUser');
       return;
    //res.send(403);
  }
};