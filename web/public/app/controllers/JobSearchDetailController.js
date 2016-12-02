(function(){

  angular
       .module('app')
       .controller('JobSearchDetailController', [
         '$q', '$state', 'JobSearchService', '$timeout', '$stateParams','ApiConnectionService',
          JobSearchDetailController
       ]);

  function JobSearchDetailController($q, $state, JobSearchService, $timeout, $stateParams,ApiConnectionService) {
    var vm = this;
    vm.users = []
    vm.userSignIn = {};
    vm.search = JobSearchService.getSearch();

    vm.getJobSearch = function(id) {
    	JobSearchService.getJobSearch(id);
    }

    vm.signIn = function(){
      var _path = "user/" + vm.userSignIn + "/jobOffer/" + vm.search.jobSearchId;
      var requestData = {
        path: _path,
        method: "PUT"
      }

      ApiConnectionService.callApi(requestData)
          .then(function(data){
            $state.go("home.jobSearch")
          },function(data){
            console.log("error")
            $state.go("home.jobSearch")
          })
    }

    vm.getJobSearch($stateParams.id);

    function init(){
      var requestData = {
        path: "user",
        method: "GET"
      }

      ApiConnectionService.callApi(requestData)
          .then(function(data){
            vm.users = data;
          },function(data){
            console.log("error")
          })
      }

      init();
    }

    

  

})();
