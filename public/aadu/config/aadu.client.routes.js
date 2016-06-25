angular.module('aadu').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'aadu/views/aadu.client.view.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);
