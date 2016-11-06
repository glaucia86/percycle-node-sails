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

    /* Função responsável em Criar Usuário: localhost:1337/user/newUser */
    create: function(req, res, next) {
        /* Aqui irá criar um Novo Usuário por meio dos parâmetros enviados desde do formulário da página: 'newUser.ejs' */
        User.create(req.params.all(), function userCreated(err, user) {
            if(err) {
                //Caso de erro, apresentar o erro na página.
                req.session.flash = {
                    err: err
                }

                // Ao dar o erro o usuário será redirecionado para a Página Principal para que possa se logar:
                return res.redirect('/user/newUser');
            }

            //E por consequencia o usuário será autenticado e logado no sistema:
            req.session.authenticated = true;
            req.session.User = user;

            //Em caso do cadastro ser bem sucessido iremos redirecionar o usuário para sua página personalizada.
            res.redirect('/user/showUser/' + user.id);
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

    /** Função responsável por listar os usuários cadastrados (ADMIN): localhost:1337/user */
    index: function(req, res, next) {
        
        //Aqui o código irá retornar todos os usuários da coleção:
        User.find(function foundUsers(err, users) {
            if(err)
                return next(err);
            res.view({
                users: users
            });
        });
    },

    /** Função responsável por atualizar o usuário cadastrado(ADMIN): localhost:1337/user/edit/:id */
    edit: function(req, res, next) {

        User.findOne(req.param('id'), function foundUser(err, user) {
            if (err) 
                return next(err);
            if (!user) 
                return next('Usuário não existe!');

            res.view({
                user: user
                });
            });
        },

    /** Função responsável por editar as informações do usuário: localhost:1337/user/edit/:id */
    update: function(req, res, next) {
        User.update(req.param('id'), req.params.all(), function userUpdated(err) {
            if(err) {
                return res.redirect('/user/edit/' + req.param('id'));
            }

            res.redirect('/user/showUser/' + req.param('id'));
        });
    },

    /** Função responsável por excluir as informações do usuário: localhost:1337/user/destroy/:id */
    destroy: function(req, res, next) {

    //Primeiro devemos procurar o 'id' do usuário que queremos deletar:    
    User.findOne(req.param('id'), function foundUser(err, user) {
        if (err) 
            return next(err);
        if (!user) 
            return next('O Usuário não existe!');

    User.destroy(req.param('id'), function userDestroyed(err) {
        if (err) 
            return next(err);
        });

        res.redirect('/user');
        });
    }
};

