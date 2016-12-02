(function(){
  'use strict';

  angular.module('app')
        .service('JobOfferService', [
        '$q',
        '$http',
        'ApiConectionService',
        JobOfferService
  ]);

  function JobOfferService($q,$http, ApiConectionService){
    
    function _getJobOffer(userId){
      var deferred = $q.defer();
      var request = {};
      request.method = "GET";
      request.url = "jobOffer/" + userId;
      request.data = {};
      ApiConectionService.callApi(request).then(
        function(response) {
          deferred.resolve(response);
        },
        function(response) {
          deferred.reject(response);
        }
      );
      return deferred.promise;
    }

    function _getJobOffers() {
      var deferred = $q.defer();
      var request = {};
      request.method = "GET";
      request.url = "jobOffer/";
      request.data = {};
      ApiConectionService.callApi(request).then(
        function(response) {
          deferred.resolve(response);
        },
        function(response) {
          deferred.reject(response);
        }
      );
      return deferred.promise;
    }

    function _createJobOffer(jobOffer) {
      var deferred = $q.defer();
      var request = {};
      request.method = "POST";
      request.url = "jobOffer/";
      request.data = jobOffer;
      ApiConectionService.callApi(request).then(
        function(response) {
          deferred.resolve(response);
        },
        function(response) {
          deferred.reject(response);
        }
      );
      return deferred.promise;
    }

    function _updateJobOffer(jobOffer) {
      var deferred = $q.defer();
      var request = {};
      request.method = "PUT";
      request.url = "jobOffer/";
      request.data = jobOffer;
      ApiConectionService.callApi(request).then(
        function(response) {
          deferred.resolve(response);
        },
        function(response) {
          deferred.reject(response);
        }
      );
      return deferred.promise; 
    }

    return {
       getJobOffer function(requestData) {
          return _getJobOffer(requestData);
        },
        getJobOffers: function() {
          return getJobOffers();
        },
        createJobOffer: function(jobOffer) {
          return _createJobOffer(jobOffer);
        },
        updateJobOffer: function(jobOffer) {
          return _updateJobOffer(jobOffer);
        }
    };
  }

})();