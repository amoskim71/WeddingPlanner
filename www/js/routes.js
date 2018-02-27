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

  .state('tabsController.newItem', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/newItem.html',
        controller: 'newItemCtrl'
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

  .state('tabsController.addEditBudget', {
    url: '/page10',
    views: {
      'tab4': {
        templateUrl: 'templates/addEditBudget.html',
        controller: 'addEditBudgetCtrl'
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

  .state('tabsController.vendorDetails', {
    url: '/page12',
    views: {
      'tab1': {
        templateUrl: 'templates/vendorDetails.html',
        controller: 'vendorDetailsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')


});