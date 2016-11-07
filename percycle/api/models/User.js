/**
 * Arquivo: User.js
 * Data: 03/11/2016
 * Author: Glaucia Lemos
 * @description :: Arquivo responsável por definir o esquema do usuário que irá realizar a conexão com a base de dados.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,

  attributes: {
    name: {
      type: 'string',
      required: true
    },

    email: {
      type: 'string',
      email: true,
      required: true,
      unique: true
    },
    
    admin: {
      type: 'boolean',
      defaultsTo: false
    },

    encryptedPassword: {
      type: 'string'
    },

    /** Esse atributo estaremos usando para ver qual o usuário está online ou não no sistema
     * (visualização somente para o ADMIN) */
    online: {
      type: 'boolean',
      defaultsTo: false
    },

    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      delete obj.confirmacao;
      delete obj.encryptedPassword;
      delete obj._csrf;
      return obj;
    }
  },

  /** Função responsável por habilitar um determinado usuário como ADMIN do sistema */
  /*beforeValidation: function (values, next) {
    if (typeof values.admin !== 'undefined') {
      if (values.admin === 'unchecked') {
        values.admin = false;
      } else  if (values.admin[1] === 'on') {
        values.admin = true;
      }
    }
     next();
  },*/

  /** Função responsável por criptografar a senha digitada tornando assim, mais seguro para o usuário o que está
   * sendo digitado de informação pessoal pelo sistema:
   */
  beforeCreate: function(values, next) {

    //Esse 'if' irá verificar se a senha e a confirmação da senha são as mesmas antes gravar na base de dados:
    if(!values.password || values.password != values.confirmacao) {
      return next({
        err: ["A senha digitada não corresponde com a senha de confirmação."]
      });
    }

    //Caso seja as mesmas senhas e estivirem tudo ok,
    //Aqui estaremos encriptografando a senha do usuário ao usar o módulo 'bcrypt', para manter seguro os dados do usuário:
    //Mais info aqui: https://github.com/kelektiv/node.bcrypt.js
    require('bcrypt').hash(values.password, 10, function passwordEncrypted(err, encryptedPassword) {
        if(err)
          return next(err);
        
        //Caso não retorne nenhum erro será atribuído a variável 'encryptedPassword' uma nova senha criptografada via hash:
        values.encryptedPassword = encryptedPassword;
        next();  
    });
  }
};

