'use strict';

angular.module('Group')
    .controller('group', function ($scope) {

        $scope.controller_loaded = 'Group loaded!';

        //KATA EXAMPLE
        $scope.sum_two_numbers = function (number_1, number_2) {
            return number_1 + number_2;
        };


        //KATA CHALLENGER
        $scope.data = {
            pair: {},
            pairs: [],
            going: []
        };
        /**
         * Get item going to trip
         * @param groups
         * @returns {Array}
         */
        $scope.select_list = function (groups) {
            var aux_group = groups;
            var list = [];
            var result = {};
            angular.forEach(groups, function (value) {
                var item = value;
                angular.forEach(aux_group, function (value) {
                    var key = value.estocolmo_id === item.estocolmo_id ? item.estocolmo_id : item.londres_id;
                    var auxiliary = [];
                    if (!angular.equals(item, value)) {
                        if (value.estocolmo_id === item.estocolmo_id || value.londres_id === item.londres_id) {
                            if (result[key]) {
                                angular.forEach(result[key], function (value_internal) {
                                    auxiliary.push(value_internal);
                                });
                            }
                            auxiliary.push(value);
                            result[key] = auxiliary;
                            aux_group.splice(groups.indexOf(item), 1);
                            aux_group.splice(groups.indexOf(value), 1);
                        }
                    }
                });
            });

            angular.forEach(result, function (value, key) {
                list.push(key * 1);
            });

            angular.forEach(aux_group, function (item) {
                if (list.indexOf(item.londres_id) === -1 && list.indexOf(item.estocolmo_id) === -1) {
                    list.push(item.londres_id);
                }
            });

            return list;
        };

        /**
         * Add pair to table
         */
        $scope.addPair = function () {
            var auxiliary_pairs = $scope.data.pairs;
            if ($scope.data.pair.estocolmo_id && $scope.data.pair.londres_id) {
                if (($scope.data.pair.estocolmo_id >= 1000 && $scope.data.pair.estocolmo_id < 2000) &&
                    ($scope.data.pair.londres_id >= 2000 && $scope.data.pair.londres_id < 3000)) {
                    $scope.data.pairs.push($scope.data.pair);
                    $scope.data.pair = {};
                    console.log($scope.data.pairs);
                } else {
                    console.log('Insert, a valid pair! (Estocolmo between 1000 and 1999 and Londres between 2000 and 2999)');
                }
            } else {
                console.log('Please, insert a pair');
            }
            $scope.data.going = $scope.select_list(auxiliary_pairs);
        };
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/group', {
                templateUrl: 'scripts/group/views/group.html',
                controller: 'group'
            });
    });
