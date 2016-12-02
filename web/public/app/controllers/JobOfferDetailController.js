(function(){

  angular
       .module('app')
       .controller('JobOfferDetailController', [
         '$q', '$state', 'JobOfferService', '$timeout', '$stateParams',
          JobOfferDetailController
       ]);

  function JobOfferDetailController($q, $state, JobOfferService, $timeout, $stateParams) {
    var vm = this;

    vm.jobOffer = JobOfferService.getOffer();

    vm.getJobOffer = function(id) {
    	JobOfferService.getJobOffer(id);
    }

    vm.getJobOffer($stateParams.id);

  }

})();
