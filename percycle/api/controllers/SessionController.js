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

        //Aqui estou criando uma variável para poder controlar a sessão através do cookie:
        //exemplo: http://www.w3schools.com/js/js_dates.asp
        var oldDateObj = new Date();
        var newDateObj = new Date(oldDateObj.getTime() + 60000);
        req.session.cookie.expires = newDateObj;

        req.session.authenticated = true;
        console.log(req.session);

        res.view('session/newUser');
    }
};

