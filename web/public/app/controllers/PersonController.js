(function(){

  angular
       .module('app')
       .controller('PersonController', [
         '$q', '$state', 'ApiConectionService',
          PersonController
       ]);

  function PersonController($q, $state, ApiConectionService) {
    var vm = this;
    vm.users = [];
    function init(){
    	var requestData = {
    		path:"user"
    	}
    	ApiConectionService.callApi(requestData)
    	.then(function(data){
    		vm.users = data;
    	},function(data){
    		console.log("error")
    	})
    }

    init();


  }

})();
