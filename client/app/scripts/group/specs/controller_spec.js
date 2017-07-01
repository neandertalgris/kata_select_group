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
        it('testing function "select_list" in scope', function () {
            expect(scope.select_list([
                {
                    estocolmo_id: 1009,
                    londres_id: 2011
                },
                {
                    estocolmo_id: 1017,
                    londres_id: 2011
                }
            ])).toEqual([2011]);
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
