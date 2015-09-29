(function () {
    'use strict';

    angular.module('angularstrapServices', [])
        .service('asyncService', asyncService);

    asyncService.$inject = ['$http', '$q'];

        function asyncService($http, $q) {
            
            var factory = {
                //properties
                retrievedData: [],
                getHeroText : getHeroText,
                getLatestSnapshot : getLatestSnapshot,
                getLastDay : getLastDay
            };

            function getLatestSnapshot(){
                var deferred = $q.defer();

                $http.get("http://[YOUR WEBSITE]/api/Reading/1").
                then(function(response) {
                    deferred.resolve(response.data);
                }, function(error) {
                    deferred.reject(error);
                    console.log("Error: " + JSON.stringify(error));
                });

                return deferred.promise;
            }

            function getLastDay(){
                var deferred = $q.defer();

                $http.get("http://[YOUR WEBSITE]/api/Reading/65").
                then(function(response) {
                    deferred.resolve(response.data);
                }, function(error) {
                    deferred.reject(error);
                    console.log("Error: " + JSON.stringify(error));
                });

                return deferred.promise;
            }
           
            return factory;
        }
})();