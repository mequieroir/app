(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      {
        name: 'People',
        icon: 'person',
        sref: '.people'
      },
      {
        name: 'Companies',
        icon: 'dashboard',
        sref: '.companies'
      },
      {
        name: 'Job Offer',
        icon: 'search',
        sref: '.jobOffer'
      },
      {
        name: 'Job Search',
        icon: 'view_module',
        sref: '.jobSearch'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
