import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  username: DS.attr('string'),
  email: DS.attr('string'),
  avatar: DS.attr('string'),
  admin: DS.attr('boolean', {
    defaultValue() { return false }
  }),
  createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  posts: DS.hasMany('post'),  // comments: DS.hasMany('comment')
});
