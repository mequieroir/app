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

    vm.goToEdit = function(id) {
      var path = "home.jobSearchEdit";
      $state.go(path,{id:id})
    }

    vm.goToDetail = function(id) {
      var path = "home.jobSearchDetail";
      $state.go(path,{id:id}) 
    }
    vm.getJobSearchs();

  }

})();
