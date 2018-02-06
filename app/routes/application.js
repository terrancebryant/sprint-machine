import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({

  session: Ember.inject.service(),

  beforeModel() {
    return this.get('session').fetch().catch(() => {});
  },

  model() {
    return RSVP.hash({
      posts: this.get('store').findAll('post'),
      user: this.get('store').findAll('user')
    });
  },

  actions: {
    // signIn(provider) {
    //   this.get('session').open('firebase', { provider: provider}).then((data) => {
    //     console.log(data)
    //   })
    // },
    // signOut() {
    //   this.get('session').close()
    // }
  }
});