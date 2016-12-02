           
(function(){

  angular
       .module('app')
       .controller('PersonController', [
         '$q', '$state','$stateParams', 'ApiConnectionService',
          PersonController
       ]);

  function PersonController($q, $state, $stateParams,ApiConnectionService) {
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
        $state.transitionTo('home.people');
      },function(data){
        $state.transitionTo('home.people');
        console.log("error")
      })
    }

    vm.cancel = function(argument) {
      $state.transitionTo('home.people');
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
    		vm.user.skills = Object.keys(vm.user.skills).map(key => vm.user.skills[key]);;
    	},function(data){
    		console.log("error")
    	})
    }

    init();


  }

})();
