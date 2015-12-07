// install   :      cordova plugin add https://github.com/geo242/cordova-plugin-powapos.git
// link      :      https://github.com/geo242/cordova-plugin-powapos

angular.module('ngCordova.plugins.powaPOS', [])

  .factory('$cordovaPowaPOS', ['$rootScope', '$window', function ($rootScope, $window) {

    $window.addEventListener('PowaPOS', function (event) {
      $rootScope.$evalAsync(function () {
        var eventDataType = event.dataType || 'unknown';
        var eventData = event.data;
        $rootScope.$broadcast('$cordovaPowaPOS:' + eventDataType, eventData);
      });
    });

    return {
      connect: function (success, error) {
        return $window.plugins.powaPOS.connect(success, error);
      },
      scannerBeep: function (beepType, success, error) {
        return $window.plugins.powaPOS.scannerBeep(success, error);
      },
      scannerAutoScanOnOff: function (autoScan, success, error) {
        return $window.plugins.powaPOS.scannerAutoScanOnOff(success, error);
      },
      openCashDrawer: function (success, error) {
        return $window.plugins.powaPOS.openCashDrawer(success, error);
      },
      printReceipt: function (receiptContent, success, error) {
        return $window.plugins.powaPOS.printReceipt(receiptContent, success, error);
      }
    };
  }]);
