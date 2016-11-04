/**
 * Arquivo: UserController.js
 * Data: 03/11/2016
 * Author: Glaucia Lemos
 * @description :: Arquivo responsável por manipular o lado dos usuários (lógica) 
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /* Função responsável por mostrar a view da Página de 'Criar Novo Usuário' */
    'newUser': function(req, res) {
        res.view();   
    },

    /* Função responsável pela ação do botão 'Criar Conta' */
    create: function(req, res, next) {
        /* Aqui irá criar um Novo Usuário por meio dos parâmetros enviados desde do formulário da página: 'newUser.ejs' */
        User.create(req.params.all(), function userCreated(error, user) {
            if(error)
                return next(error);
            
            res.json(user);
        });
    }
};

