import Ember from 'ember';
import Folks from 'dummy/mixins/folks';

export default Ember.Route.extend(Folks, {
  model: function() {
    return this.get('bastion');
  },
  setupController: function(controller, model) {
    this._super.apply(this, arguments);
    controller.set('it', model);
    controller.set('folks', Ember.A([this.get('bastion'), this.get('stanley'), this.get('charles')]));
  }
});
