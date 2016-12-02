(function(){
  'use strict';

  angular.module('app')
        .factory('JobSearchService', [
        '$q',
        '$http',
        'ApiConnectionService',
        JobSearchService
  ]);

  function JobSearchService($q,$http, ApiConectionService){
    var srv = {};
    srv.searchs = {};
    srv.search = {};

    srv.getSearchs = function() {return srv.searchs}
    srv.getSearch = function() {console.log(1);return srv.search}

    srv.getJobSearch = function(userId){
      var request = {};
      request.method = "GET";
      request.path = "jobSearch/" + userId;
      request.data = {};
      ApiConectionService.callApi(request).then(
        function(response) {
          console.log(response)
          angular.copy(response, srv.search)
        },
        function(response) {
        }
      );
    }

    srv.getJobSearchs = function() {
      var request = {};
      request.method = "GET";
      request.path = "jobSearch/";
      request.data = {};
      ApiConectionService.callApi(request).then(
        function(response) {
          console.log(srv.searchs)
          angular.copy(response, srv.searchs)//srv.searchs = response;
          console.log(srv.searchs)
        },
        function(response) {
          deferred.reject(response);
        }
      );
    }

    function _createJobSearch(jobSearch) {
      var request = {};
      request.method = "POST";
      request.path = "jobSearch/";
      request.data = jobSearch;
      ApiConectionService.callApi(request).then(
        function(response) {
          deferred.resolve(response);
        },
        function(response) {
          deferred.reject(response);
        }
      );
    }

    function _updateJobSearch(jobSearch) {
      var request = {};
      request.method = "PUT";
      request.path = "jobSearch/";
      request.data = jobSearch;
      ApiConectionService.callApi(request).then(
        function(response) {
          deferred.resolve(response);
        },
        function(response) {
          deferred.reject(response);
        }
      );
    }
return srv;
    // return {
    //    getJobSearch: function(requestData) {
    //       return _getJobSearch(requestData);
    //     },
    //     getJobSearchs: function() {
    //       return _getJobSearchs();
    //     },
    //     createJobSearch: function(jobSearch) {
    //       return _createJobSearch(jobSearch);
    //     },
    //     updateJobSearch: function(jobSearch) {
    //       return _updateJobSearch(jobSearch);
    //     },
    //     searchs: searchs
    // };
  }

})();
