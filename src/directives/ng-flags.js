/**
 * ng-flags module
 * Turns country ISO code to flag thumbnail.
 *
 * Author: asafdav - https://github.com/asafdav
 */
angular.module('ngFlag', []).
  directive('flag', function() {
    return {
      restrict: 'E',
      replace: true,
      template: '<span class="f{{ size }}"><span class="flag {{ country }}"></span></span>',
      scope: {
        country: '@',
        size: '@'
      },
      link: function(scope, elm, attrs) {
        // Default flag size
        scope.size = 16;

        scope.$watch('country', function(value) {
          if((value !== undefined) && (value.length <= 2)) scope.country = angular.lowercase(value);
          else scope.country = value;
        });

        scope.$watch('size', function(value) {
          scope.size = value;
        });
      }
    };
  });
