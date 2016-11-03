angular.module('SignupModule').controller('SignupController', ['$scope', '$http', function($scope, $http){
    
    //Nessa parte do código estou setando o estado do formulário:
    $scope.signupForm = {
        loading: false
    }

    $scope.submitSignupForm = function() {
        //Caso todos os inputs seguem dentro dos padrões, retorno o estado do formulário como true:
        $scope.signupForm.loading = true;

        //Aqui estou enviando um requisição do tipo 'POST' dos campos preenchidos no formulário:
        $http.post('/signup', {
            name: $scope.signupForm.name,
            email: $scope.signupForm.email,
            password: $scope.signupForm.password
        })
        //Se tudo der certo... encaminharei as informações para a rota: 'User':
        .then(function onSuccess(){
            window.location = '/user'
        })
        //Caso dê algum erro... retornará para o usuário uma mensagem de erro:
        .catch(function onError(sailsResponse) {
            console.log(sailsResponse);
        })
        .finally(function eitherWay(){
            $scope.signupForm.location = false;
        })
    }
}]);