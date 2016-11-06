/**
 * Allow any authenticated user.
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