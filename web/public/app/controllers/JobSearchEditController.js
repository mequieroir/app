(function(){

  angular
       .module('app')
       .controller('JobSearchEditController', [
         '$q', '$state','$stateParams', 'ApiConnectionService', 'JobSearchService',
          JobSearchEditController
       ]);

  function JobSearchEditController($q, $state, $stateParams,ApiConnectionService, JobSearchService) {
    var vm = this;
    vm.jobSearch = {} 

    vm.save = function(argument) {
      var id = $stateParams.jobSearchId
      if (id) {
        JobSearchService.createJobSearch(vm.jobSearch);
      } else {
        JobSearchService.updateJobSearch(vm.jobSearch)
      }
    }

    vm.cancel = function(argument) {
      $state.transitionTo('home.jobSearch');
    }

    function init(){
      var id = $stateParams.id
      if (id) {
        JobSearchService.getJobSearch(id);
      }
      vm.jobSearch = JobSearchService.getSearch();
      console.log(vm.jobSearch)
    }

    init();


  }

})();
