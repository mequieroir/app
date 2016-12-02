(function(){

  angular
       .module('app')
       .controller('JobOfferEditController', [
         '$q', '$state','$stateParams', 'ApiConnectionService', 'JobOfferService',
          JobOfferEditController
       ]);

  function JobOfferEditController($q, $state, $stateParams,ApiConnectionService, JobOfferService) {
    var vm = this;
    vm.jobOffer = {} 

    vm.save = function(argument) {
      var id = $stateParams.jobOfferId
      if (id) {
        JobOfferService.createjobOffer(vm.jobOffer);
      } else {
        JobOfferService.updatejobOffer(vm.jobOffer)
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
      vm.jobOffer = JobOfferService.getOffer();
    }

    init();


  }

})();
