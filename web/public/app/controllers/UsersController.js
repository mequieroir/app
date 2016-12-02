(function(){

  angular
       .module('app')
       .controller('UsersController', [
         '$q', '$state', 'ApiConnectionService',
          UsersController
       ]);

  function UsersController($q, $state, ApiConnectionService) {
    var vm = this;
    vm.users = [];

    vm.editProfile = function(data) {
      console.log('data',data);
      var path = "home." + data.type
      $state.go(path,{userId:data.userId})
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
