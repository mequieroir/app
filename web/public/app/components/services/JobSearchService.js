(function(){
  'use strict';

  angular.module('app')
        .factory('JobSearchService', [
        '$q',
        '$http',
        'ApiConnectionService',
        JobSearchService
  ]);

  function JobSearchService($q,$http, ApiConnectionService){
    var srv = {};
    srv.searchs = {};
    srv.search = {};

    srv.getSearchs = function() {return srv.searchs}
    srv.getSearch = function() {console.log(1);return srv.search}

    srv.getJobSearch = function(userId){
      var request = {};
      console.log(userId)
      request.method = "GET";
      request.path = "jobSearch/" + userId;
      request.data = {};
      ApiConnectionService.callApi(request).then(
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
      ApiConnectionService.callApi(request).then(
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

    srv.createJobSearch = function(jobSearch) {
      var request = {};
      request.method = "POST";
      request.path = "jobSearch/";
      request.data = jobSearch;
      ApiConnectionService.callApi(request).then(
        function(response) {
          console.log(response);
        },
        function(response) {
          console.log(response);
        }
      );
    }

    srv.updateJobSearch = function(jobSearch) {
      var request = {};
      request.method = "PUT";
      request.path = "jobSearch/";
      request.data = jobSearch;
      ApiConnectionService.callApi(request).then(
        function(response) {
          console.log(response);
        },
        function(response) {
          console.log(response);
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
