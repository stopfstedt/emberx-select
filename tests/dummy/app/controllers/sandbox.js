import Ember from 'ember';

export default Ember.Controller.extend({
  makes: Ember.computed(function() {
    return [{name: "Acura"}, {name: "Audi"}, {name: "Bentley"}, {name: "BMW"}, {name: "Ford"}];
  }),

  models: Ember.computed('selectedMake', function() {
    if (this.get('selectedMake.name') === "Ford") {
      return [{model: "Focus"}, {model: "Edge"}, {model: "Explorer"}, {model: "GT"}, {model: "Mustang"}]
    }
  })
});
