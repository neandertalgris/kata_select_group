'use strict';

describe('Controller: select group', function () {

    beforeEach(module('Group'));

    var controller;
    var scope;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        controller = $controller('group', {$scope: scope});
    }));

    describe('On instance', function () {
        it('should set "controller_loaded" variable in scope', function () {
            expect(scope.controller_loaded).toContain('loaded');
        });
        it('testing function "sum_two_numbers" in scope', function () {
            expect(scope.sum_two_numbers(10, 20)).toEqual(30);
            expect(scope.sum_two_numbers(11, 22)).toEqual(33);
        });
        //KATA
        iit('testing function "select_list" in scope', function () {
            expect(scope.select_list([
                {
                    estocolmo_id: 1000,
                    londres_id: 2000
                },
                {
                    estocolmo_id: 1001,
                    londres_id: 2000
                }
            ])).toEqual([2000]);
        });

        it('testing function "select_list" in scope', function () {
            expect(scope.select_list([
                {
                    estocolmo_id: 1019,
                    londres_id: 2021
                },
                {
                    estocolmo_id: 1018,
                    londres_id: 2021
                }
            ])).toEqual([2021]);
        });

        it('testing function "select_list" in scope', function () {
            expect(scope.select_list([
                {
                    estocolmo_id: 1009,
                    londres_id: 2000
                },
                {
                    estocolmo_id: 1009,
                    londres_id: 2001
                },
                {
                    estocolmo_id: 1002,
                    londres_id: 2002
                },
                {
                    estocolmo_id: 1003,
                    londres_id: 2002
                }
            ])).toEqual([1009, 2002]);
        });

        iit('testing function "select_list" in scope', function () {
            expect(scope.select_list([
                {
                    estocolmo_id: 1003,
                    londres_id: 2002
                },
                {
                    estocolmo_id: 1003,
                    londres_id: 2003
                },
                {
                    estocolmo_id: 1003,
                    londres_id: 2007
                },
                {
                    estocolmo_id: 1003,
                    londres_id: 2053
                },
                {
                    estocolmo_id: 1003,
                    londres_id: 2054
                }
            ])).toEqual([1003]);
        });

        it('testing function "select_list" in scope', function () {
            expect(scope.select_list([
                {
                    estocolmo_id: 1099,
                    londres_id: 2099
                },
                {
                    estocolmo_id: 1009,
                    londres_id: 2002
                },
                {
                    estocolmo_id: 1002,
                    londres_id: 2002
                }
            ])).toEqual([2002, 2099]);
        });

        it('testing function "select_list" in scope', function () {
            expect(scope.select_list([
                {
                    estocolmo_id: 1009,
                    londres_id: 2012
                },
                {
                    estocolmo_id: 1009,
                    londres_id: 2012
                }
            ])).toEqual([2012]);
        });
    });

    describe('when going to /group', function () {

        var route, location, rootScope, httpBackend;

        beforeEach(inject(function ($route, $location, $rootScope, $httpBackend) {
            route = $route;
            location = $location;
            rootScope = $rootScope;
            httpBackend = $httpBackend;

            httpBackend.when('GET', 'scripts/group/views/group.html').respond('<div></div>');
        }));

        afterEach(function () {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        it('should use minesweeper.html and controller', function () {
            expect(route.current).toBeUndefined();

            location.path('/group');

            httpBackend.flush();

            expect(route.current.templateUrl).toBe('scripts/group/views/group.html');
            expect(route.current.controller).toBe('group');
        });
    });

});
