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

    /* Função responsável pela ação do botão 'Criar Conta': localhost:1337/user/newUser */
    create: function(req, res, next) {
        /* Aqui irá criar um Novo Usuário por meio dos parâmetros enviados desde do formulário da página: 'newUser.ejs' */
        User.create(req.params.all(), function userCreated(err, user) {
            if(err) {
                //Caso de erro, apresentar o erro na página.
                console.log(err);
                req.session.flash = {
                    err: err
                }

                // Ao dar o erro o usuário será redirecionado para a Página Principal
                return res.redirect('/user/newUser');
            }

            //Caso esteja tudo certo, criar o novo usuário.
            res.json(user);

            //Em caso do cadastro ser bem sucessido iremos redirecionar o usuário para s sua página personalizada.
            res.redirect('/user/show/' + user.id);
        });
    },

    /** Função responsável por mostrar o perfil do usuário: localhost:1337/user/showUser/:id */
    showUser: function(req, res, next) {
        //Em caso de encontrar um determinado usuário pelo 'id' retornar o usuário
        User.findOne(req.param('id'), function foundUser(err, user) {
            if(err)
                return next(err);            
            if(!user)
                return next();         
            res.view({
                user: user
            });
        });
    },

    /** Função responsável por listar os usuários cadastrados: localhost:1337/user */
    index: function(req, res, next) {
        //Aqui o código irá retornar todos os usuários da coleção:
        User.find(function foundUsers(err, users) {
            if(err)
                return next(err);
            res.view({
                users: users
            });
        });
    }
};

