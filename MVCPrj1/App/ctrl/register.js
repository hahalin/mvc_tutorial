var app = angular.module('BpmApp', [])

app.controller('regctrl', function ($scope, CompanyService) {

    $scope.message = "I am register controller";
    getCompanies();
    $scope.selectedCompany = "1";

    function getCompanies() {
        CompanyService.getCompanies()
            .success(function (ds) {
                $scope.companies = ds;
                
            })
            .error(function (error) {
                $scope.status = 'Unable to load company data: ' + error.message;
                console.log($scope.companies);
            });
    }
});


app.factory('CompanyService', ['$http', function ($http) {

    var CompanyService = {};
    CompanyService.getCompanies = function () {
        return $http.get('/Company/List');
    };
    return CompanyService;

}]);
