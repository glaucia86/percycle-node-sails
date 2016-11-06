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
    }
};

