(function(){

  angular
       .module('app')
       .controller('JobOfferDetailController', [
         '$q', '$state', 'JobOfferService', '$timeout', '$stateParams', 'ApiConnectionService',
          JobOfferDetailController
       ]);

  function JobOfferDetailController($q, $state, JobOfferService, $timeout, $stateParams,ApiConnectionService) {
    var vm = this;
    vm.users = []
    vm.userSignIn = {};

    vm.jobOffer = JobOfferService.getOffer();

    vm.getJobOffer = function(id) {
    	JobOfferService.getJobOffer(id);
    }

    vm.getJobOffer($stateParams.id);

    function init(){
      var requestData = {
        path: "user",
        method: "GET"
      }
      
      ApiConnectionService.callApi(requestData)
          .then(function(data){
            vm.users = data;
          },function(data){
            console.log("error")
          })
      }

      init();
    }



})();
