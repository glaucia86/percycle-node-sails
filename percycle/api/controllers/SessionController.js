/**
 * Arquivo: SessionController.js
 * Data: 05/11/2016
 * Author: Glaucia Lemos
 * @description :: Arquivo responsável por manipular as sessões dos usuários
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
    /** Função responsável por poder manipular as sessões dos usários que se logam no sistema */
    'newUser': function(req, res) {

        res.view('session/newUser');
    },

    /** Função responsável por averiguar se os dados inseridos no formulário estão de acordo com que já
     * está cadastrado no sistema
     */
    create: function(req, res, next) {

        //Aqui irá verificar se os parâmetros de email e senha foram digitados no formulário:
        if(!req.param('email') || !req.param('password')) {

            var usernamePasswordRequiredError = [{
                name: 'usernamePasswordRequired',
                message: 'Você deve inserir os campos usuário e senha.'
            }]

            req.session.flash = {
                err: usernamePasswordRequiredError
            }

            res.redirect('/session/newUser');
            return;
        }

        //Aqui estamos procurando o usuário pelo email já cadastrado no sistema:
        User.findUserByEmail(req.param('email')).done(function(err, user) {
            if(err)
                return next(err);

            //Caso o usuário não seja encontrado...
            if(!user) {
                var userNotFound = [{
                    name: 'notUser',
                    message: 'O endereço de email ' + req.param('email') + ' não foi encontrado.'
                }]

                res.redirect('/session/newUser');
                return;
            }
        });
    }
};

