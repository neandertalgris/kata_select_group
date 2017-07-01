'use strict';

angular.module('Group')
    .controller('group', function ($scope) {

        $scope.controller_loaded = 'Group loaded!';

        $scope.sum_two_numbers = function (number_1, number_2) {
            return number_1 + number_2;
        };

        $scope.select_list = function (groups) {
            var list = [];
            var result = {};
            angular.forEach(groups, function (value) {
                var item = value;
                angular.forEach(groups, function (value) {
                    if (value.estocolmo_id === item.estocolmo_id || value.londres_id === item.londres_id) {
                        if (item !== value) {
                            var key = value.estocolmo_id === item.estocolmo_id ? item.estocolmo_id : item.londres_id;
                            result[key] = item;
                        }
                    }
                });
            });
            angular.forEach(result, function (value, key) {
                list.push(key * 1);
            });
            return list;
        };


    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/group', {
                templateUrl: 'scripts/group/views/group.html',
                controller: 'group'
            });
    });
