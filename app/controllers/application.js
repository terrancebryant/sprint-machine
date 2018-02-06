import Controller from '@ember/controller';
import { get } from '@ember/object';
import getOrCreateUser from 'ember-fire-test/utils/get-or-create-user'
import { inject as service } from '@ember/service';


export default Controller.extend({

  session: service(),

  actions: {
    signIn(provider) {
      this.get('session').open('firebase', { provider: provider}).then(() => {
        let user = null;
        let uid = get(this,'session.uid');
        let username = get(this,'session.currentUser.displayName');
        let avatar = get(this, 'session.currentUser.photoURL')
        user = getOrCreateUser(uid,username,avatar,this.store);
        user.then((userData) => {
          return userData.save().then(() => { this.transitionToRoute('dashboard'); })
        })
      })
    },

    signOut() {
      this.get('session').close()
    },

    // save(){
    //   let user = null;
    //   let titleURL= get(this, 'title');
    //   let uid = get(this,'session.uid');
    //   let username = get(this,'session.currentUser.displayName');
    //   let avatar = get(this, 'session.currentUser.photoURL')
    //   let date = new Date();

    //   // let post = this.store.createRecord('post',{
    //   //     title: get(this, 'title'),
    //   //     body: get(this, 'body'),
    //   //     author: 'test',
    //   //     titleURL:titleURL,
    //   //     date: date,
    //   // });

    //   user = getOrCreateUser(uid,username,avatar,this.store);

    //   user.then((userData)=>{
    //     return userData.save();
    //   });

    //   set(this, 'title','');
    //   set(this, 'body','');
    //   // this.transitionTo('index');
    // }
  }
});
