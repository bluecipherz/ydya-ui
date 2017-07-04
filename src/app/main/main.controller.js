export class MainController {

    constructor ($scope) {
        'ngInject';

        let vm = this;

        /*
        *
        *   Public variables
        *
        * */

        $scope.loginTab = 0;
        $scope.loginError = "";

        $scope.regForm = [
            { model: "", error:false},
            { model: "", error:false},
            { model: "", error:false},
            { model: "", error:false},
        ];


        /*
        *
        *   Public Methods
        *
        * */

        $scope.openLoginPopup = function (index) {
            $scope.changeLoginTab(index);
            $scope.loginPopup = true;
        };


        $scope.closeLoginPopup = function () {
            $scope.loginPopup = false;
        };
        
        
        $scope.changeLoginTab = function (index) {
            clearLoginInputs();
            $scope.loginTab = index;
        };


        $scope.login = function () {
            // console.log($scope.username, $scope.password);
            $scope.loginError = "Invalid phone number or password";
        };


        $scope.validate = function () {
            validateInputs();
        };


        $scope.regFormUIValidate = function (index) {
            return $scope.regForm[index].error;
        };


        $scope.register = function () {
            if(validateInputs(true)){
                $scope.regFormBusy = true;
                let param = {};
                console.log($scope.regForm);
            }
        };


        /*
        *
        *   Private Methods
        *
        * */

        function clearLoginInputs() {
            $scope.username = "";
            $scope.password = "";
            $scope.loginError = "";
        }


        function validateInputs(reg) {

            let error = false;

            if(!($scope.regForm[0].model && $scope.regForm[0].model.length > 3)){
                $scope.regForm[0].error = true;
            }
            else{
                $scope.regForm[0].error = false;
            }

            if(!($scope.regForm[1].model && $scope.regForm[1].model.length > 9)){
                $scope.regForm[1].error = true;
            }
            else{
                $scope.regForm[1].error = false;
            }

            if(!($scope.regForm[2].model && $scope.regForm[2].model.length > 5)){
                $scope.regForm[2].error = true;
            }
            else {
                $scope.regForm[2].error = false;
            }

            if(!($scope.regForm[3].model && $scope.regForm[3].model.length > 5) && $scope.regForm[2].model !== $scope.regForm[3].model){
                $scope.regForm[3].error = true;
            }
            else {
                $scope.regForm[3].error = false;
            }

            for(let idx in $scope.regForm){
                if($scope.regForm[idx].error){
                    error = true;
                }
            }

            if(error && reg){
                $scope.regError = "Please fill all the fields";
            }
            else{
                $scope.regError = "";
            }

            return !error;
        }

    }

}
