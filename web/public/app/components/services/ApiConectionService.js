(function(){
  'use strict';

  angular.module('app')
        .service('ApiConectionService', [
        '$q',
        '$http',
        ApiConectionService
  ]);

  function ApiConectionService($q,$http){
    var _herokuUrl = 'http://me-quiero-ir-api.herokuapp.com/';
    
    function _callApi(requestData){
       var deferred  = $q.defer();
        var request = $http({
            method: requestData.method,
            contentType: 'application/json',
            url:  _herokuUrl + requestData.path,
            data: requestData.data
        })
        .success( function(response){
            deferred.resolve(response);     
        })
        
        .error( function(response){
            deferred.reject(response);
        });
        return deferred.promise;
    }


    return {
       callApi: function(requestData){
            return _callApi(requestData);
        }
    };
  }

})();
