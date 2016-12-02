(function(){

  angular
       .module('app')
       .controller('JobSearchEditController', [
         '$q', '$state','$stateParams', 'ApiConnectionService', 'JobSearchService',
          JobSearchEditController
       ]);

  function JobSearchEditController($q, $state, $stateParams,ApiConnectionService, JobSearchService) {
    var vm = this;
    vm.jobOffer = {} 

    vm.save = function(argument) {
      var id = $stateParams.jobOfferId
      if (id) {
        JobSearchService.createJobSearch(vm.jobOffer);
      } else {
        JobSearchService.updateJobSearch(vm.jobOffer)
      }
    }

    vm.cancel = function(argument) {
      $state.transitionTo('home.jobOffer');
    }

    function init(){
      var id = $stateParams.jobOfferId
      if (id) {
        JobOfferService.getJobOffer(id);
      }
      vm.jobOffer = JobSearchService.getOffer();
    }

    init();


  }

})();
