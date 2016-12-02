(function(){

  angular
       .module('app')
       .controller('JobOfferController', [
         '$q', '$state', 'JobOfferService', '$timeout',
          JobOfferController
       ]);

  function JobOfferController($q, $state, JobOfferService, $timeout) {
    var vm = this;

    vm.offers = JobOfferService.getOffers();

    vm.getJobOffers = function() {
    	JobOfferService.getJobOffers();
    }

    vm.getJobOffers();

  }

})();
