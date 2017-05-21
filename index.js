/**
 * Created by Frank on 2017/5/21.
 */
const angular = require('angular');
const Jq = require('jquery');

export default angular.module('app',[])
    .controller('Myctrl',['$scope',function ($scope) {
        $scope.talent = 'talent';
    }])