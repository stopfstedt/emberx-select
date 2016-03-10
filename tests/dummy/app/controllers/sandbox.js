import Ember from 'ember';

export default Ember.Controller.extend({
  makes: Ember.computed(function() {
    return ["Acura", "Audi", "Bentley", "BMW", "Ford"];
  }),

  models: Ember.computed('selectedMake', function() {
    if (this.get('selectedMake.name') === "Ford") {
      return ["Focus", "Edge", "Explorer", "GT", "Mustang"];
    }
  }),

  isStreak: true,
  formats: Ember.computed(function () {
    return ["thing", "another thing"];
  }),

  buildStatesFormats: Ember.computed(function () {
    return ["Hello", "is it me?", "you're looking for"];
  }),

  actions: {
    toggleStreak() {
      this.toggleProperty('isStreak');
      return false;
    }
  }
});
