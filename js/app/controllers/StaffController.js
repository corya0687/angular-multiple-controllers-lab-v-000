function StaffController() {
  this.name = 'Worker';
  this.email = 'worker@work.com';
  this.phone = '856*946*6316'
}


angular
  .module('app')
  .controller('StaffController', StaffController)
