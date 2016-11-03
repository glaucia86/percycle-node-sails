angular.module('SignupModule').controller('SignupController', ['$scope', function($scope){
    
    //Nessa parte do código estou setando o estado do formulário:
    $scope.signupForm = {
        loading: false
    }

    submitSignupForm = function() {
        //Caso todos os inputs seguem dentro dos padrões, retorno o estado do formulário como true:
        $scope.signupForm.loading = true;

        console.log("Boa! Deu Tudo certo!!!");
    }
}]);