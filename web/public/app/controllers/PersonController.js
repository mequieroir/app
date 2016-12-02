           
(function(){

  angular
       .module('app')
       .controller('PersonController', [
         '$q', '$state','$stateParams', 'ApiConnectionService',
          PersonController
       ]);
       /**
       * TODO: REFACTORIZAR A UN SERVICE
       */
  function PersonController($q, $state, $stateParams,ApiConnectionService) {
    var vm = this;
    vm.user = {} 

    vm.save = function(argument) {
      // body...
        
      var _path = (vm.user.userId != undefined) ? "user/" + vm.user.userId : "user/";
      var _method = (vm.user.userId != undefined) ? "PUT":"POST";
      var requestData = {
        path: _path,
        method: _method,
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
      if (id != null) {
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
    	
    }

    init();


  }

})();
