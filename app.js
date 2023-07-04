// angular.module('taskApp', [])
  // .controller('TaskController', function() {
    // this.tasks = ['Task 1', 'Task 2', 'Task 3'];
    // this.newTask = '';
    // this.editingTask = null;
    
    // this.addTask = function() {
      // if (this.newTask.trim() !== '') {
        // this.tasks.push(this.newTask);
        // this.newTask = '';
      // }
    // };
    
    // this.editTask = function(task) {
      // this.editingTask = task;
      // this.newTask = task;
    // };
    
    // this.deleteTask = function(task) {
      // var index = this.tasks.indexOf(task);
      // if (index !== -1) {
        // this.tasks.splice(index, 1);
      // }
    // };
  // });
 
 
 angular.module('taskManagerApp', [])
  .controller('TaskController', ['$scope', function($scope) {
    var vm = this;

    vm.tasks = [];
    vm.newTask = '';
    vm.sortColumn = 'title';
    vm.filterText = '';
    vm.editMode = false;
    vm.editTask = {};

    vm.addTask = function() {
      vm.tasks.push({
        title: vm.newTask,
        assignedTo: ''
      });
      vm.newTask = '';
    };

    vm.deleteTask = function(task) {
      var index = vm.tasks.indexOf(task);
      vm.tasks.splice(index, 1);
    };

    vm.editTask = function(task) {
      vm.editMode = true;
      vm.editTask = angular.copy(task);
    };

    vm.updateTask = function() {
      var index = vm.tasks.indexOf(vm.editTask);
      vm.tasks[index] = vm.editTask;
      vm.cancelEdit();
    };

    vm.cancelEdit = function() {
      vm.editMode = false;
      vm.editTask = {};
    };

    vm.sort = function(column) {
      vm.sortColumn = column;
    };
  }]);