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

    vm.goToEdit = function(id) {
      var path = "home.jobOfferEdit";
      $state.go(path,{id:id})
    }

    vm.goToDetail = function(id) {
      var path = "home.jobOfferDetail";
      $state.go(path,{id:id}) 
    }

    vm.new = function() {
      var path = "home.jobOfferEdit";
      $state.go(path,{id:null});
    }
    vm.getJobOffers();

  }

})();
