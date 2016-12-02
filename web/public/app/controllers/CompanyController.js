(function(){

  angular
       .module('app')
       .controller('CompanyController', [
         '$q', '$state','$stateParams', 'ApiConnectionService',
          CompanyController
       ]);

  function CompanyController($q, $state, $stateParams,ApiConnectionService) {
    var vm = this;
    vm.user = {} 

    vm.save = function(argument) {
      // body...
      var _path = "user/" + vm.user.userId;
      var requestData = {
        path: _path,
        method: "PUT",
        data: vm.user
      }
      ApiConnectionService.callApi(requestData)
      .then(function(data){
        $state.transitionTo('home.companies');
      },function(data){
        $state.transitionTo('home.companies');
        console.log("error")
      })
    }

    vm.cancel = function(argument) {
      $state.transitionTo('home.companies');
    }

    function init(){
      var id = $stateParams.userId
    	var _path = "user/" + id;
      var requestData = {
    		path: _path,
        method: "GET"
    	}
    	ApiConnectionService.callApi(requestData)
    	.then(function(data){
        vm.user = data;
    	},function(data){
    		console.log("error")
    	})
    }

    init();


  }

})();
