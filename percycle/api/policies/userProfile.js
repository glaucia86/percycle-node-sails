/**
 * Arquivo: userProfile.js
 * Data: 05/11/2016
 * Author: Glaucia Lemos
 * @description :: Arquivo responsável por dar acesso ao ADMIN visualizar todos os perfis dos
 * usuários cadastrados no sistema.
 * E também da a permissão do usuário que foi recém logad ao sistema a ver o seu perfil e também a realizar
 * as atualizações do seu perfil.
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = function(req, res, ok) {
    var sessionUserMatchesId = req.session.User.id === req.param('id');
    var isAdmin = req.session.User.admin;

    if (!(sessionUserMatchesId || isAdmin)) {
        var noRightsError = [{
            name: 'noRights',
            message: 'Você deve ser Administrador do Sistema para ter acesso a essa página.'
        }]

        req.session.flash = {
            err: noRightsError
        }

        res.redirect('/session/newUser');
        return;
    }

    ok();
}