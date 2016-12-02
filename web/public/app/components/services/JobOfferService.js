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
    
    var srv = {};
    srv.offers = {};
    srv.offer = {};

    srv.getSearchs = function() {return srv.offers}
    srv.getSearch = function() {console.log(1);return srv.offer}

    srv.getJobOffer = function(userId){
      var request = {};
      request.method = "GET";
      request.path = "jobOffer/" + userId;
      request.data = {};
      ApiConectionService.callApi(request).then(
        function(response) {
          console.log(response)
          angular.copy(response, srv.offer)
        },
        function(response) {
        }
      );
    }

    srv.getJobOffers = function() {
      var request = {};
      request.method = "GET";
      request.path = "jobOffer/";
      request.data = {};
      ApiConectionService.callApi(request).then(
        function(response) {
          console.log(srv.offers)
          angular.copy(response, srv.offers)//srv.offers = response;
          console.log(srv.offers)
        },
        function(response) {
          deferred.reject(response);
        }
      );
    }

    srv.createJobOffer = function(jobOffer) {
      var request = {};
      request.method = "POST";
      request.path = "jobOffer/";
      request.data = jobOffer;
      ApiConectionService.callApi(request).then(
        function(response) {
          console.log(response);
        },
        function(response) {
          console.log(response);
        }
      );
    }

    srv.updateJobOffer = function(jobOffer) {
      var request = {};
      request.method = "PUT";
      request.path = "jobOffer/";
      request.data = jobOffer;
      ApiConectionService.callApi(request).then(
        function(response) {
          console.log(response);
        },
        function(response) {
          console.log(response);
        }
      );
    }
return srv;
  }

})();
