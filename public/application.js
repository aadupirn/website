var appName = 'aadusite';
var app = angular.module(appName, ['ngRoute', 'aadu']);

app.config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);

angular.element(document).ready(function() {
    angular.bootstrap(document, [appName]);
});



