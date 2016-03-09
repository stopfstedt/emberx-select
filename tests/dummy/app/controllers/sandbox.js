import Ember from 'ember';

export default Ember.Controller.extend({
  task: null,
  hasBeenToggled: false,
  allTasks: [{title: 'one'}, {title: 'two'}, {title: 'three'}],
  tasks: Ember.computed('allTasks', function() {
    return this.get('allTasks');
  }),

  actions: {
    changeTask() {
      this.toggleProperty('hasBeenToggled');

      if (!this.get('hasBeenToggled')) {
        let tasks = this.get('allTasks');
        this.set('allTasks', tasks.slice(1));
      } else {
        this.get('allTasks').push({title: 'Weeee'});
      }
    }
  }
});
