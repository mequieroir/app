(function(){

  angular
       .module('app')
       .controller('UserController', [
         '$q', '$state', 'ApiConectionService',
          UserController
       ]);

  function UserController($q, $state, ApiConectionService) {
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
    	ApiConectionService.callApi(requestData)
    	.then(function(data){
    		vm.users = Object.keys(data).map(key => data[key]);
    	},function(data){
    		console.log("error")
    	})
    }

    init();


  }

})();
