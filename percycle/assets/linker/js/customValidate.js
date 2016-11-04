/**
 * Arquivo: customValidate.js
 * Data: 04/11/2016
 * Author: Glaucia Lemos
 * @description :: Arquivo responsável por validar os campos no lado do Front-End de maneira mais
 *  customizada para o usuário.
 * 
 */

$(document).ready(function() {
    // http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	// http://docs.jquery.com/Plugins/Validation/
	// http://docs.jquery.com/Plugins/Validation/validate#toptions

    $('#sign-up-form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            password: {
                minlength: 6,
                required: true
            },
            confirmacao: {
                minlength: 6,
                equalTo: "#password"
            }
        },
            success: function(e) {
                e.text('Correto!').addClass('valid')
            }
    });
});