function ContactController() {
  var vm = this;
  this.name = 'Billy';
  this.email = 'Billy@hotmail.com';
  this.phone = '555*555*5555';

  this.changeName = function () {
    vm.name = 'Something'
  }
}


angular
  .module('app')
  .controller('ContactController',ContactController)
