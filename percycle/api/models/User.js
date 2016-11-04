/**
 * Arquivo: User.js
 * Data: 03/11/2016
 * Author: Glaucia Lemos
 * @description :: Arquivo responsável por definir o esquema do usuário que irá realizar a conexão com a base de dados.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nome: {
      type: 'string',
      required: true
    },

    email: {
      type: 'string',
      email: true,
      required: true,
      unique: true
    },
    
    senhaCriptografada: {
      type: 'string'
    }
  }
};

