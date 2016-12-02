(function(){

  angular
       .module('app')
       .controller('JobSearchController', [
         '$q', '$state', 'JobSearchService', '$timeout',
          JobSearchController
       ]);

  function JobSearchController($q, $state, JobSearchService, $timeout) {
    var vm = this;

    vm.searchs = JobSearchService.getSearchs();

    vm.getJobSearchs = function() {
    	JobSearchService.getJobSearchs();
    }

    vm.getJobSearchs();

  }

})();
