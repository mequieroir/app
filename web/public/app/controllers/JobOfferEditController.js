(function(){

  angular
       .module('app')
       .controller('jobOfferEditController', [
         '$q', '$state','$stateParams', 'ApiConnectionService', 'jobOfferService',
          jobOfferEditController
       ]);

  function jobOfferEditController($q, $state, $stateParams,ApiConnectionService, jobOfferService) {
    var vm = this;
    vm.jobOffer = {} 

    vm.save = function(argument) {
      var id = $stateParams.jobOfferId
      if (id) {
        jobOfferService.createjobOffer(vm.jobOffer);
      } else {
        jobOfferService.updatejobOffer(vm.jobOffer)
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
      vm.jobOffer = jobOfferService.getOffer();
    }

    init();


  }

})();
