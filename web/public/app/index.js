'use strict';

angular.module('angularMaterialAdmin', ['ngAnimate', 'ngCookies', 'ngTouch',
  'ngSanitize', 'ui.router', 'ngMaterial', 'nvd3', 'app'])

  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider,
                    $mdIconProvider) {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'app/views/main.html',
        controller: 'MainController',
        controllerAs: 'vm',
        abstract: true
      })
      .state('home.people', {
        url: '/people',
        templateUrl: 'app/views/people.html',
        controller: 'UsersController',
        controllerAs: 'vm',
        data: {
          title: 'People'
        }
      }) 
       .state('home.companies', {
        url: '/companies',
        templateUrl: 'app/views/companies.html',
        controller: 'UsersController',
        controllerAs: 'vm',
        data: {
          title: 'Companies'
        }
      })     
      .state('home.person', {
        url: '/person',
        templateUrl: 'app/views/person.html',
        controller: 'PersonController',
        controllerAs: 'vm',
        params:      {'userId': null},
        data: {
          title: 'Person'
        }
      })
      .state('home.company', {
        url: '/company',
        templateUrl: 'app/views/company.html',
        controller: 'CompanyController',
        controllerAs: 'vm',
        params:      {'userId': null},
        data: {
          title: 'Company'
        }
      })
      .state('home.jobOfferDetail', {
        url: '/jobOffer/:id',
        templateUrl: 'app/views/jobOfferDetail.html',
        controller: 'JobOfferDetailController',
        controllerAs: 'vm',
        data: {
          title: 'Job Offer'
        }
      })
      .state('home.jobOffer', {
        url: '/jobOffer',
        templateUrl: 'app/views/jobOffer.html',
        controller: 'JobOfferController',
        controllerAs: 'vm',
        data: {
          title: 'Job Offer'
        }
      })
      .state('home.jobSearch', {
        url: '/jobSearch',
        templateUrl: 'app/views/jobSearch.html',
        controller: 'JobSearchController',
        controllerAs: 'vm',
        data: {
          title: 'Job Search'
        }
      })
      .state('home.jobSearchDetail', {
        url: '/jobSearch/detail/:id',
        templateUrl: 'app/views/JobSearchDetail.html',
        controller: 'JobSearchDetailController',
        controllerAs: 'vm',
        data: {
          title: 'Job Search'
        }
      })
      .state('home.jobSearchEdit', {
        url: '/jobSearch/edit/:id',
        templateUrl: 'app/views/JobSearchEdit.html',
        controller: 'JobSearchEditController',
        controllerAs: 'vm',
        data: {
          title: 'Job Search'
        }
      })
      .state('home.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/views/dashboard.html',
        data: {
          title: 'Dashboard'
        }
      });

    $urlRouterProvider.otherwise('/people');

    $mdThemingProvider
      .theme('default')
        .primaryPalette('grey', {
          'default': '600'
        })
        .accentPalette('teal', {
          'default': '500'
        })
        .warnPalette('defaultPrimary');

    $mdThemingProvider.theme('dark', 'default')
      .primaryPalette('defaultPrimary')
      .dark();

    $mdThemingProvider.theme('grey', 'default')
      .primaryPalette('grey');

    $mdThemingProvider.theme('custom', 'default')
      .primaryPalette('defaultPrimary', {
        'hue-1': '50'
    });

    $mdThemingProvider.definePalette('defaultPrimary', {
      '50':  '#FFFFFF',
      '100': 'rgb(255, 198, 197)',
      '200': '#E75753',
      '300': '#E75753',
      '400': '#E75753',
      '500': '#E75753',
      '600': '#E75753',
      '700': '#E75753',
      '800': '#E75753',
      '900': '#E75753',
      'A100': '#E75753',
      'A200': '#E75753',
      'A400': '#E75753',
      'A700': '#E75753'
    });

    $mdIconProvider.icon('user', 'assets/images/user.svg', 64);
  });
