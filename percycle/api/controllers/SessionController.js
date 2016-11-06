/**
 * Arquivo: SessionController.js
 * Data: 05/11/2016
 * Author: Glaucia Lemos
 * @description :: Arquivo responsável por manipular as sessões dos usuários
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var bcrypt = require('bcrypt');

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
                message: 'Você deve inserir os campos e-mail e senha.'
            }]

            req.session.flash = {
                err: usernamePasswordRequiredError
            }

            res.redirect('/session/newUser');
            return;
        }

        //Aqui estamos procurando o usuário pelo email já cadastrado no sistema:
        User.findOneByEmail(req.param('email'), function foundUser(err, user) {
            if(err)
                return next(err);

            //Caso o usuário não seja encontrado...
            if(!user) {
                var userNotFoundError = [{
                    name: 'userNotFound',
                    message: 'O endereço de email ' + req.param('email') + ' não foi encontrado.'
                }]

                req.session.flash = {
                    err: userNotFoundError
                }

                res.redirect('/session/newUser');
                return;
            }

            /** Aqui iremos comparar do formulário se os parâmetros da senha encriptografada
             * do usuário foi encontrada
             */
            bcrypt.compare(req.param('password'), user.encryptedPassword, function(err, valid) {
                if(err)
                    return next(err);
                
                //Se a senha digitada no formulário não coincidir com a senha vinda da base de dados...
                if(!valid) {
                    var usernamePasswordMismatchError = [{
                        name: 'usernamePasswordMismatch',
                        message: 'E-mail e senha inválido.'
                    }]

                    req.session.flash = {
                        err: usernamePasswordMismatchError
                    }

                    res.redirect('/session/newUser');
                    return;
                }

                //Caso o usuário consiga se logar será autenticado e....
                req.session.authenticated = true;
                req.session.User = user;

                //... será redirecionado para sua página profile pessoal: 
                //localhost:1337/user/showUser/:id
                res.redirect('/user/showUser/' + user.id);
            });
        });
    }
};

