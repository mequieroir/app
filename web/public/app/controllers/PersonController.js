(function(){

  angular
       .module('app')
       .controller('PersonController', [
         '$q', '$state', 'ApiConnectionService',
          PersonController
       ]);

  function PersonController($q, $state, ApiConnectionService) {
    var vm = this;
    vm.users = [];

    vm.editProfile = function(data) {
      console.log('data',data);
      $state.go('home.profile',{userId:data.userId})
    }    

    function init(){
    	var requestData = {
    		path:"user",
        method: "GET"
    	}
    	ApiConnectionService.callApi(requestData)
    	.then(function(data){
    		vm.users = Object.keys(data).map(key => data[key]);
    	},function(data){
    		console.log("error")
    	})
    }

    init();


  }

})();
