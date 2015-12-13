(function() {
  'use strict';

  angular
    .module('angularScaffolding')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
