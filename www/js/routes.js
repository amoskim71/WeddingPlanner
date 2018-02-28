angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.explore', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/explore.html',
        controller: 'exploreCtrl'
      }
    }
  })

  .state('tabsController.checklistTabDefaultPage', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/checklistTabDefaultPage.html',
        controller: 'checklistTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.settingsTabDefaultPage', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/settingsTabDefaultPage.html',
        controller: 'settingsTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.checklist', {
    url: '/page5',
    views: {
      'tab2': {
        templateUrl: 'templates/checklist.html',
        controller: 'checklistCtrl'
      }
    }
  })

  .state('tabsController.newChecklistItem', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/newChecklistItem.html',
        controller: 'newChecklistItemCtrl'
      }
    }
  })

  .state('tabsController.budgetOverview', {
    url: '/page7',
    views: {
      'tab4': {
        templateUrl: 'templates/budgetOverview.html',
        controller: 'budgetOverviewCtrl'
      }
    }
  })

  .state('tabsController.addTransaction', {
    url: '/page8',
    views: {
      'tab4': {
        templateUrl: 'templates/addTransaction.html',
        controller: 'addTransactionCtrl'
      }
    }
  })

  .state('tabsController.budgetBreakdown', {
    url: '/page9',
    views: {
      'tab4': {
        templateUrl: 'templates/budgetBreakdown.html',
        controller: 'budgetBreakdownCtrl'
      }
    }
  })

  .state('tabsController.addBudgetCategory', {
    url: '/page10',
    views: {
      'tab4': {
        templateUrl: 'templates/addBudgetCategory.html',
        controller: 'addBudgetCategoryCtrl'
      }
    }
  })

  .state('tabsController.saved', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/saved.html',
        controller: 'savedCtrl'
      }
    }
  })

  .state('tabsController.vendor1Details', {
    url: '/page12',
    views: {
      'tab1': {
        templateUrl: 'templates/vendor1Details.html',
        controller: 'vendor1DetailsCtrl'
      }
    }
  })

  .state('tabsController.vendor2Details', {
    url: '/page13',
    views: {
      'tab1': {
        templateUrl: 'templates/vendor2Details.html',
        controller: 'vendor2DetailsCtrl'
      }
    }
  })

  .state('tabsController.vendor3Details', {
    url: '/page14',
    views: {
      'tab1': {
        templateUrl: 'templates/vendor3Details.html',
        controller: 'vendor3DetailsCtrl'
      }
    }
  })

  .state('tabsController.vendorADetails', {
    url: '/page16',
    views: {
      'tab1': {
        templateUrl: 'templates/vendorADetails.html',
        controller: 'vendorADetailsCtrl'
      }
    }
  })

  .state('tabsController.vendorBDetails', {
    url: '/page17',
    views: {
      'tab1': {
        templateUrl: 'templates/vendorBDetails.html',
        controller: 'vendorBDetailsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')


});