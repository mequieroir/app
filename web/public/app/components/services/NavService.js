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
        name: 'Person',
        icon: 'person',
        sref: '.person'
      },
      {
        name: 'Company',
        icon: 'dashboard',
        sref: '.company'
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
      },
        {
        name: 'Dashboard',
        icon: 'dashboard',
        sref: '.dashboard'
      },
      {
        name: 'Profile',
        icon: 'person',
        sref: '.profile'
      },
      {
        name: 'Table',
        icon: 'view_module',
        sref: '.table'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
