(function(){

  angular
       .module('app')
       .controller('JobSearchDetailController', [
         '$q', '$state', 'JobSearchService', '$timeout', '$stateParams',
          JobSearchDetailController
       ]);

  function JobSearchDetailController($q, $state, JobSearchService, $timeout, $stateParams) {
    var vm = this;

    vm.search = JobSearchService.getSearch();

    vm.getJobSearch = function(id) {
    	JobSearchService.getJobSearch(id);
    }

    vm.getJobSearch($stateParams.id);

  }

})();
