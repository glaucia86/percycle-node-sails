/**
 * Arquivo: admin.js
 * Data: 05/11/2016
 * Author: Glaucia Lemos
 * @description :: Arquivo responsável por restrigir o acesso ao público de 
 *  determinadas páginas de acesso (lista de usuários) do sistema (ADMIN)
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = function (req, res, ok) {

    //Se o usuário for permitido então....
    if (req.session.User && req.session.User.admin) {
        return ok();
    }

    //Caso o usuário não for permitid, apresentar uma mensagem de erro:
    else {
        var requireAdminError = [{
            name: 'requireAdmin',
            message: 'Você deve ser Administrador do Sistema para acessar essa página.'
        }]

        req.session.flash = {
            err: requireAdminError
        }

        res.redirect('/session/newUser');
    }
};